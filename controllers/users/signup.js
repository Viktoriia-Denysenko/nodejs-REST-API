const { RequestError } = require("../../helpers");

const bcrypt = require("bcryptjs");
const { User } = require("../../models/user");
const gravatar = require("gravatar");

const signup = async (req, res) => {
  const { password, email, subscription } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const result = await User.create({
    password: hashPassword,
    email,
    subscription,
    avatarURL,
  });
  res.status(201).json({
    email: result.email,
    avatar: result.avatarURL,
  });
};

module.exports = signup;
