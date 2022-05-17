const fs = require("fs").promises;

var readJsonBin = {
  getData: async function readJsonBin(filePath) {
    try {
      const data = await fs.readFile(filePath);
      return JSON.parse(data);
    } catch (error) {
      console.error(`Got an error trying to read the file: ${error.message}`);
    }
  }
};
module.exports = readJsonBin;
