const express = require("express");

const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require("../../helpers");
const {
  auth,
  validationBody,
  isValidId,
  validationBodyPatch,
} = require("../../middlewares");

const { joiSchema, statusJoiSchema } = require("../../models/contacts");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  auth,
  validationBody(joiSchema),
  ctrlWrapper(ctrl.addContacts)
);

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  isValidId,
  validationBody(joiSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validationBodyPatch(statusJoiSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
