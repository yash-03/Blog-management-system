const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
  profile: {
    name: String,
    email: String,
    mobile: String,
  },
  role: String,
  password: String,
  active: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

const userModel = model("Users", userSchema);

module.exports = userModel;
