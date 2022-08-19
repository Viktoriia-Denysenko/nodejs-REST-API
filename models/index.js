const { Contact } = require("./contacts");
const { joiSchema } = require("./contacts");
const { statusJoiSchema } = require("./contacts");

module.exports = {
  Contact,
  joiSchema,
  statusJoiSchema,
};
