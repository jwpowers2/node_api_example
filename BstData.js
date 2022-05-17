const lookup = require("binlookup")();
const BST = require("./BST");

const fs = require("fs");
const readline = require("readline");

// getting data is prohibitively slow, need to make a new csv file with the actual data in it
// this script does a slow scrape of the bins and makes a csv file of the data

function getBinData(inFile, outFile) {
  try {
    /*
    fs.writeFile(inFile, "key, country, type\n", err => {
      console.log(err);
    });
    */
    const data = fs.readFileSync(outFile, "UTF-8");

    const lines = data.split(/\r?\n/);
    let counter = 0;
    setInterval(() => {
      console.log(lines[counter]);
      lookup(lines[counter])
        .then(info => {
          console.log(info);
          let csvFileData = `${lines[counter]},${info.country.name},${info.type}\n`;
          fs.open(outfile, "a", (err, fd) => {
            if (err) {
              console.log(err.message);
            } else {
              fs.write(fd, csvFileData, (err, bytes) => {
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
        })
        .catch(e => console.log(e));
      counter++;
    }, 30000);
    return BST;
  } catch (err) {
    console.error(err);
  }
}

// run this with args for file to write to and file to read BIN numbers from
getBinData();
