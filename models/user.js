const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegexp = /^[\w.]+@[\w]+.[\w]+$/;

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: emailRegexp,
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    avatarURL: {
      type: String,
      required: [true, "Avatar is required"],
    },
    token: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchemaUser = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  subscription: Joi.string().valueOf(...["starter", "pro", "business"]),
  token: Joi.string(),
});

const joiSchemaForSubscription = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});

const joiSchemaVerifyEmail = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

const User = model("user", userSchema);

module.exports = {
  User,
  joiSchemaUser,
  joiSchemaForSubscription,
  joiSchemaVerifyEmail,
};
