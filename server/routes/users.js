const express = require("express");
const router = express.Router();

router
  .post("/login", (req, res) => {
    res.send("user login");
  })
  .post("/register", (req, res) => {
    res.send("register page");
  })
  .post("/authuser", (req, res) => {
    res.send("auth user");
  });

module.exports = router;
