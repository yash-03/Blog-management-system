const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
dotenv.config();
require("./connection");
const users = require("./routes/users");
const blogs = require("./routes/blog");

const PORT = 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to blog api");
});
app.use("/", users);
app.use("/blog", blogs);

app.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});
