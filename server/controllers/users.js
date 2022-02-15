const userModel = require("../models/users");
const helper = require("../helpers/general-helpers");
const { generateToken } = require("../helpers/general-helpers");
const AppError = require("../utils/appError");

const UserControls = {
  async register(req, res) {
    try {
      const { password, email } = req.body;
      const hash = await helper.encrypt(password);
      const userRecord = {
        ...req.body,
        password: hash,
      };
      const user = new userModel(userRecord);
      const newUser = await user.save();

      const token = await generateToken(email);

      res.send({ token, status: "success", user: newUser });
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

        const token = await generateToken(username);
        res.send({ token, status: "success", user });
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
      res.send({ status: "fail", error: err.message });
    }
  },
  async authUser(req, res) {
    res.send(req.user);
  },
};

module.exports = UserControls;
