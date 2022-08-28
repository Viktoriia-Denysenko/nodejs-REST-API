const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const { auth } = require("../../middlewares");

const ctrl = require("../../controllers/currentUser");

const router = express.Router();

router.get("/current", auth, ctrlWrapper(ctrl.getCurrentUser));

module.exports = router;
