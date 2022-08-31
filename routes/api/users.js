const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const { auth, validationUser } = require("../../middlewares");

const { joiSchema, joiSchemaForSubscription } = require("../../models");

const ctrl = require("../../controllers/users");

const router = express.Router();

router.post("/signup", validationUser(joiSchema), ctrlWrapper(ctrl.signup));
router.post("/login", validationUser(joiSchema), ctrlWrapper(ctrl.login));
router.get("/logout", auth, ctrlWrapper(ctrl.logout));
router.patch(
  "/:userId",
  validationUser(joiSchemaForSubscription),
  ctrlWrapper(ctrl.updateSubscriptionStatus)
);

module.exports = router;
