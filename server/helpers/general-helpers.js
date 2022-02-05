const bcrypt = require("bcrypt");

const saltRounds = 10;

module.exports = {
  async encrypt(password) {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  },
};
