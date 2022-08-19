const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");

const updateContact = async (req, res) => {
  const newContact = req.body;

  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, newContact);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateContact;
