const fs = require("fs/promises");
const path = require("path");

class FileAdapter {
  constructor(file) {
    this.file = file;
  }
  async read() {
    const result = await fs.readFile(path.join(__dirname, this.file), "utf8");
    const data = JSON.stringify(result);
    return data;
  }
  async write(data) {
    await fs.writeFile(path.join(__dirname, this.file), JSON.stringify(data));
  }
}

module.exports = FileAdapter;
