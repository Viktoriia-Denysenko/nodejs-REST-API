const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const addContacts = require("./addContact");
const removeContact = require("./removeContact");
const updateContact = require("./updateContact");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  listContacts,
  getContactById,
  addContacts,
  removeContact,
  updateContact,
  updateStatusContact,
};
