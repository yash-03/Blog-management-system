const jwt = require("jsonwebtoken");

module.exports = {
  async verifyToken(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(400).send({
        status: "fail",
        errors: {
          message: "Access denied!",
        },
      });
    }
    jwt.verify(token, "secret", function (err, decoded) {
      if (err) {
        return res.status(400).send({
          status: "fail",
          errors: {
            message: "Wrong token",
          },
        });
      }
      req.user = decoded?.username;
      next();
    });
  },
};
