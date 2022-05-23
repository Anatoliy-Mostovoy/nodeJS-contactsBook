const crypto = require("crypto");
const DB = require("./db.js"); //* затяглі клас для роботи з даними
const db = new DB("contacts.json"); //* зробили екземлпяр класа і передели туди назву файла

const getContacts = async () => {
  return await db.read();
};

const addContact = async (body) => {
  const contacts = await db.read();
  const newContact = { id: crypto.randomUUID(), ...body };
  contacts.push(newContact);
  await db.write(contacts);
  return newContact;
};

module.exports = { getContacts, addContact };
