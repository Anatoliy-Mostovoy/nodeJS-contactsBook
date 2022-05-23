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

const deleteContact = async (contactId) => {
  const contacts = await db.read();
  const deleteContact = contacts.filter((contact) => {
    return contact.id === contactId;
  });
  const newContacts = contacts.filter((contact) => {
    return contact.id !== contactId;
  });
  await db.write(newContacts);
  return deleteContact;
};

module.exports = { getContacts, addContact, deleteContact };
