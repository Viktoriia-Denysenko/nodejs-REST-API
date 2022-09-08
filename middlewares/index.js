const validationBody = require("./validationBody");
const isValidId = require("./isValidId");
const validationBodyPatch = require("./validationBodyPatch");
const validationUser = require("./validationUser");
const auth = require("./auth");
const upload = require("./upload");

module.exports = {
  validationBody,
  isValidId,
  validationBodyPatch,
  validationUser,
  auth,
  upload,
};
