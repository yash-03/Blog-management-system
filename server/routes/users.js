const express = require("express");
const router = express.Router();
const { register, login, authUser } = require("../controllers/users");
const { verifyToken } = require("../middleware/auth");

router
  .post("/login", login)
  .post("/register", register)
  .post("/authuser", verifyToken, authUser);

module.exports = router;
