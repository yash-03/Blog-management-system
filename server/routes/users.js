const express = require("express");
const router = express.Router();
const users = require("../controllers/users");

router
  .post("/login", (req, res) => {
    res.send("user login");
  })
  .post("/register", async (req, res) => {
    try {
      const userResult = await users.registerUser(req.body);
      res.send({ token: "dummyToken", status: "success", user: userResult });
    } catch (err) {
      res.send({ status: "fail", error: err });
    }
  })
  .post("/authuser", (req, res) => {
    res.send("auth user");
  });

module.exports = router;
