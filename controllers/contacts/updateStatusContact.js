const { Contact } = require("../../models");
const { RequestError } = require("../../helpers");

const updateStatusContact = async (req, res) => {
  const { favorite } = req.body;
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    {
      new: true,
    }
  );
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateStatusContact;
