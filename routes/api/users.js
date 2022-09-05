const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const { auth, validationUser, upload } = require("../../middlewares");

const { joiSchemaForSubscription, joiSchemaUser } = require("../../models");

const ctrl = require("../../controllers/users");

const router = express.Router();

router.post("/signup", validationUser(joiSchemaUser), ctrlWrapper(ctrl.signup));
router.post("/login", validationUser(joiSchemaUser), ctrlWrapper(ctrl.login));
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);
router.get("/logout", auth, ctrlWrapper(ctrl.logout));
router.patch(
  "/:userId",
  validationUser(joiSchemaForSubscription),
  ctrlWrapper(ctrl.updateSubscriptionStatus)
);

module.exports = router;
