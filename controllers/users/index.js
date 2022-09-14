const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const updateSubscriptionStatus = require("./updateSubscriptionStatus.js");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail")

module.exports = {
  signup,
  login,
  logout,
  updateSubscriptionStatus,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
};
