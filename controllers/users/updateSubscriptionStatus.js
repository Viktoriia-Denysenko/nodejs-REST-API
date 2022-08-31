const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");

const updateSubscriptionStatus = async (req, res) => {
  const { subscription } = req.body;

  const { userId } = req.params;

  const result = await User.findByIdAndUpdate(
    userId,
    { subscription },
    {
      new: true,
    }
  );
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateSubscriptionStatus;
