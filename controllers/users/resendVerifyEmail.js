const { User } = require("../../models/user");

const { RequestError } = require("../../helpers");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!email) {
    throw RequestError(400, "missing required field email");
  }
  if (!user) {
    throw RequestError(404, "Not found");
  }
  if (user.verify) {
    throw RequestError(400, "Verification has already been passed");
  }
  const mail = {
    to: email,
    subject: "Подтверждние регистрации на сайте",
    html: `<a href="http://localhost:3000/api/users/verify/${user.verificationToken}" target="_blank">Нажмите для подтвержения регистрации</a>`,
  };
  await sendEmail(mail);
  res.status(201).json({
    message: "Verification email sent",
  });
};

module.exports = resendVerifyEmail;
