const fs = require("fs");

// this file is used to make a json file from the csv (which has data from the scrape)
const data = fs.readFileSync("./newdata.csv", "UTF-8");
fs.open("jsonBin.json", "a", (err, fd) => {
  if (err) {
    console.log(err.message);
  } else {
    const lines = data.split("\n");
    const result = [];
    const headers = lines[0].split(",");

    for (let i = 1; i < lines.length; i++) {
      if (!lines[i]) continue;
      const obj = {};
      const currentline = lines[i].split(",");

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j].toLowerCase();
      }
      result.push(obj);
    }

    fs.write(fd, JSON.stringify(result), (err, bytes) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(bytes + " bytes written");
      }
    });
  }
  fs.close(fd, err => {
    if (err) console.error("failed to close file", err);
    else {
      console.log("\n> file closed");
    }
  });
});
