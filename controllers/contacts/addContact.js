// const contacts = require("../../models/contacts");
const { Contact } = require("../../models");

const addContact = async (req, res) => {
  // const newContact = req.body;

  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

module.exports = addContact;
