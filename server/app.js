const express = require("express");
const cors = require("cors");

const PORT = 4000;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to blog api");
});

app.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});
