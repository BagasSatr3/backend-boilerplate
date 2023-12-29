// /src/controllers/postController.js
const Post = require("../models/Post");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
