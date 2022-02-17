const express = require("express");
const router = express.Router();
const { create } = require("../controllers/blog");
const { verifyToken } = require("../middleware/auth");
const { validate } = require("../middleware/validation/blog");

router.post("/create", verifyToken, validate, create);

module.exports = router;
