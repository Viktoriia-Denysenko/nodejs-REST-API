const contacts = require("../../models/contacts");

const addContact = async (req, res) => {
  const newContact = req.body;

  const result = await contacts.addContact(newContact);
  res.status(201).json(result);
};

module.exports = addContact;
