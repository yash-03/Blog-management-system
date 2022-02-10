const bcrypt = require("bcrypt");
const AppError = require("../utils/appError");

const saltRounds = 10;

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
};
