const bcrypt = require("bcryptjs");
const { User } = require("../../models/user");
const gravatar = require("gravatar");
import { v4 } from "uuid";

const { RequestError, sendEmail } = require("../../helpers");

const signup = async (req, res) => {
  const { password, email, subscription } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = v4();

  const result = await User.create({
    password: hashPassword,
    email,
    subscription,
    avatarURL,
    verificationToken,
  });
  const mail = {
    to: email,
    subject: "Подтверждние регистрации на сайте",
    html: `<a href="http://localhost:3000/api/users/verify/${verificationToken}" target="_blank">Нажмите для подтвержения регистрации</a>`,
  };
  await sendEmail(mail);
  res.status(201).json({
    email: result.email,
    avatar: result.avatarURL,
  });
};

module.exports = signup;
