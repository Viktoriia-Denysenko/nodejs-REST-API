const express = require("express");

const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require("../../helpers");
const { validationBody } = require("../../middlewares");

const { joiSchema, statusJoiSchema } = require("../../models");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", validationBody(joiSchema), ctrlWrapper(ctrl.addContacts));

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  validationBody(joiSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId/favorite",
  validationBody(statusJoiSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
