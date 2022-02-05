const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    profile: {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      mobile: String,
    },
    role: {
      type: String,
      enum: {
        values: ["ADMIN", "BLOGGER", "USER"],
        message: "{VALUE} is not supported",
      },
    },
    password: { type: String, required: true },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
  },
  { versionKey: false }
);

const userModel = model("Users", userSchema);

module.exports = userModel;
