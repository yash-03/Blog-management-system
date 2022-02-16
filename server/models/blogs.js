const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const blogSchema = new Schema(
  {
    title: String,
    description: String,
    comments: [{ body: String, date: Date }],
    meta: {
      votes: Number,
      favs: Number,
    },
    active: { type: Boolean, default: true },
    createdBy: String,
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
  },
  { versionKey: false }
);

const blogModel = model("Blogs", blogSchema);

module.exports = blogModel;
