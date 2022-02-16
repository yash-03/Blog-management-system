const blogModel = require("../models/blogs");

const Blog = {
  async create(req, res) {
    try {
      const data = req.body;
      const blog = new blogModel(data);
      const newBlog = await blog.save();
      res.send({ status: "success", data: newBlog });
    } catch (err) {
      console.log(`Create Blog Error: ${err}`);
      res.send({ status: "fail", error: err });
    }
  },
};

module.exports = Blog;
