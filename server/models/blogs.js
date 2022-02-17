const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ file: String, caption: String }],
    meta: {
      votes: { count: Number, user: String },
      favs: { count: Number, user: String },
      likes: { count: Number, user: String },
      dislikes: { count: Number, user: String },
    },
    comments: [{ user: String, body: String, date: Date }],
    active: { type: Boolean, default: true },
    createdBy: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
  },
  { versionKey: false }
);

const blogModel = model("Blogs", blogSchema);

module.exports = blogModel;
