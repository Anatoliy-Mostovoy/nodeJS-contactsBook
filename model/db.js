// const fs = require("fs/promises");
// const path = require("path");

// class FileAdapter {
//   constructor(file) {
//     this.file = file;
//   }
//   async read() {
//     const result = await fs.readFile(path.join(__dirname, this.file), "utf8");
//     const data = JSON.parse(result);
//     return data;
//   }
//   async write(data) {
//     await fs.writeFile(path.join(__dirname, this.file), JSON.stringify(data));
//   }
// }

//! код зверху стосувався локальної бази у вигляді json файлу
const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.URL_DB;

const db = MongoClient.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   client.close();
// });

module.exports = db;
