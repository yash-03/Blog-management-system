const userModel = require("../models/users");
const helper = require("../helpers/general-helpers");

const UserControls = {
  async register(req, res) {
    try {
      const { password } = req.body;
      const hash = await helper.encrypt(password);
      const userRecord = {
        ...req.body,
        password: hash,
      };
      const user = new userModel(userRecord);
      const newUser = await user.save();

      res.send({ token: "dummyToken", status: "success", user: newUser });
    } catch (err) {
      console.log(`User Register Error: ${err}`);
      res.send({ status: "fail", error: err });
    }
  },
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await userModel
        .findOne({ "profile.email": username })
        .exec();
      if (user) {
        const hash = user.password;
        const isPasswordMatch = await helper.compare(password, hash);
        if (!isPasswordMatch) {
          res.send({
            status: "fail",
            error: {
              message: "password is wrong!!",
            },
          });
        }
        res.send({ token: "dummy token", status: "success", user });
      } else {
        res.send({
          status: "fail",
          error: {
            message: "user is not found!",
          },
        });
      }
    } catch (err) {
      console.log(`User login error: ${err}`);
      res.send({ status: "fail", error: err });
    }
  },
};

module.exports = UserControls;
