const validation = {
  async validate(req, res, next) {
    let message = [];
    const { title, description } = req.body;
    if (!title) {
      message.push("title is required!");
    }
    if (!description) {
      message.push("description is required!");
    }
    if (message?.length > 0) {
      res.send({
        status: "fail",
        errors: {
          message,
        },
      });
    }
    next();
  },
};

module.exports = validation;
