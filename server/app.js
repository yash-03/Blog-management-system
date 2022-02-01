const express = require("express");
const cors = require("cors");
const users = require("./routes/users");

const PORT = 4000;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to blog api");
});
app.use("/", users);

app.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});
