const express = require("express");

const port = 4000;
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to blog api");
});

app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
