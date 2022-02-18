const blogModel = require("../models/blogs");

const Blog = {
  async create(req, res) {
    try {
      const data = req.body;
      const blog = new blogModel({ ...data, createdBy: req.user });
      const newBlog = await blog.save();
      res.send({ status: "success", data: newBlog });
    } catch (err) {
      console.log(`Create Blog Error: ${err}`);
      res.send({ status: "fail", error: err });
    }
  },
  async update(req, res) {
    try {
      const { _id: id } = req.body;
      const blog = await blogModel.findOneAndUpdate(
        { _id: id },
        { ...req.body },
        { new: true }
      );
      res.send({ status: "success", data: blog });
    } catch (err) {
      console.log(`Create Blog Error: ${err}`);
      res.send({ status: "fail", error: err });
    }
  },
};

module.exports = Blog;
