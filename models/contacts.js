const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(contactId) {
  const contacts = await listContacts();

  const result = contacts.find((item) => item.id === contactId);

  if (!result) {
    return null;
  }
  return result;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const idx = contacts.findIndex(
    (item) => item.id === JSON.stringify(contactId) || item.id === contactId
  );
  if (idx === -1) {
    return null;
  }
  const [removeContacts] = contacts.splice(idx, 1);

  const updateContacts = async (contacts) => {
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
  };
  await updateContacts(contacts);
  return removeContacts;
}

async function addContact({ name, email, phone }) {
  const contacts = await listContacts();
  const newContact = { id: v4(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
}

async function updateContact(id, { name, email, phone }) {
  const contacts = await listContacts();
  const idx = contacts.findIndex(
    (item) => item.id === JSON.stringify(id) || item.id === id
  );
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { id, name, email, phone };
  const updateContacts = async (contacts) => {
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
  };
  await updateContacts(contacts);
  return contacts[idx];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
