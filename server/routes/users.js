const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/users");

router
  .post("/login", (req, res) => {
    res.send("user login");
  })
  .post("/register", (req, res) => registerUser(req, res))
  .post("/authuser", (req, res) => {
    res.send("auth user");
  });

module.exports = router;
