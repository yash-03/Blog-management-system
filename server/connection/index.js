const mongoose = require("mongoose");

const options = [];

mongoose.connect(process.env.MONGO_URL, options).then(
  () => {
    console.log("MongoDB connect!");
  },
  (err) => {
    console.log(`MongoDB Connection Error: ${err}`);
  }
);
