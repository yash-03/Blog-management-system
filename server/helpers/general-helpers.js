const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");

const saltRounds = "secret";

module.exports = {
  async encrypt(password) {
    try {
      const hash = await bcrypt.hash(password, saltRounds);
      return hash;
    } catch (err) {
      throw new AppError(err);
    }
  },
  async compare(password, hash) {
    return await bcrypt.compare(password, hash);
  },
  async generateToken(username) {
    try {
      const token = await jwt.sign({ username }, saltRounds);
      return token;
    } catch (err) {
      throw new AppError(err);
    }
  },
};
