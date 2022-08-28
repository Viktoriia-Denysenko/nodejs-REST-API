const { User } = require("../../models");

const getCurrentUser = async (req, res) => {
  const { email, subscription } = req.user;
  res.json({
    user: { email, subscription },
  });
};

module.exports = getCurrentUser;
