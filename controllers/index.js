const contacts = require("./contacts");
const signup = require("./users");
const login = require("./users");
const currentUser = require("./currentUser");
const logout = require("./users");
const updateSubscriptionStatus = require("./users");
const updateAvatar = require("./users");

module.exports = {
  contacts,
  signup,
  login,
  currentUser,
  logout,
  updateSubscriptionStatus,
  updateAvatar,
};
