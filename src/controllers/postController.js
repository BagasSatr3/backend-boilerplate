// /src/controllers/postController.js
const Post = require("../models/Post");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('user');

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId).populate('user');
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createPost = async (req, res) => {
    try {
      const { title, content, userId } = req.body;
      
      const newPost = new Post({ title, content, user: userId });
  
      const savedPost = await newPost.save();
      res.json(savedPost);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

exports.updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        title,
        content,
      },
      { new: true }
    ).populate('user');

    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const deletedPost = await Post.findByIdAndDelete(postId).populate('user');

    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
