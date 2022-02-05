const mongoose = require("mongoose");

const options = [];

mongoose.connect("mongodb://127.0.0.1:27017/blog", options).then(
  () => {
    console.log("MongoDB connect!");
  },
  (err) => {
    console.log(`MongoDB Connection Error: ${err}`);
  }
);
