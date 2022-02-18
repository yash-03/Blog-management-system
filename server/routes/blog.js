const express = require("express");
const router = express.Router();
const { create, update } = require("../controllers/blog");
const { verifyToken } = require("../middleware/auth");
const { validate } = require("../middleware/validation/blog");

router.post("/create", verifyToken, validate, create);
router.post("/update", verifyToken, validate, update);

module.exports = router;
