const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/users");

router
  .post("/login", (req, res) => login(req, res))
  .post("/register", (req, res) => register(req, res))
  .post("/authuser", (req, res) => {
    res.send("auth user");
  });

module.exports = router;
