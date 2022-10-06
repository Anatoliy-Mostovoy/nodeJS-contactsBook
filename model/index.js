const crypto = require("crypto");
// const DB = require("./db.js"); //* затяглі клас для роботи з даними
// const db = new DB("contacts.json"); //* зробили екземлпяр класа і передели туди назву файла
//! прі локальному знаходжені бази у файлі
const db = require("./db.js");
const { ObjectId } = require("mongodb");

const getContacts = async () => {
  return await db.read();
};

const getContactById = async (contactId) => {
  const contacts = await db.read();
  const indexContact = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (indexContact === -1) {
    return null;
  }
  return contacts[indexContact];
};

const addContact = async (body) => {
  const contacts = await db.read();
  const newContact = { id: crypto.randomUUID(), ...body };
  contacts.push(newContact);
  await db.write(contacts);
  return newContact;
};

const updateContacts = async (contactId, body) => {
  const contacts = await db.read();
  const indexContact = contacts.findIndex((contact) => {
    return contact.id === contactId;
  });
  if (indexContact !== -1) {
    contacts[indexContact] = { ...contacts[indexContact], ...body };
    await db.write(contacts);
    return contacts[indexContact];
  }
  return null;
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

module.exports = {
  getContacts,
  addContact,
  deleteContact,
  updateContacts,
  getContactById,
};
