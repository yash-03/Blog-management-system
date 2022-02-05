const userModel = require("../models/users");
const helper = require("../helpers/general-helpers");

const UserControls = {
  async registerUser(userData) {
    try {
      const { password } = userData;
      const hash = await helper.encrypt(password);
      console.log("Test" + hash);
      userData.password = hash;
      const user = new userModel(userData);
      return await user.save();
    } catch (err) {
      console.log(`User Register Error: ${err.message}`);
      throw new Error(err);
    }
  },
};

module.exports = UserControls;
