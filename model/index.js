const crypto = require("crypto");
const DB = require("./db.js"); //* затяглі клас для роботи з даними
const db = new DB("contacts.json"); //* зробили екземлпяр класа і передели туди назву файла

const getContacts = async () => {
  return await db.read();
};

module.exports = { getContacts };
