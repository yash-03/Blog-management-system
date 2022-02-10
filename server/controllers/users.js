const userModel = require("../models/users");
const helper = require("../helpers/general-helpers");

const UserControls = {
  async registerUser(req, res) {
    try {
      const { password } = req.body;
      const hash = await helper.encrypt(password);
      const userRecord = {
        ...req.body,
        password,
      };
      const user = new userModel(userRecord);
      const newUser = await user.save();

      res.send({ token: "dummyToken", status: "success", user: newUser });
    } catch (err) {
      console.log(`User Register Error: ${err}`);
      res.send({ status: "fail", error: err });
    }
  },
};

module.exports = UserControls;
