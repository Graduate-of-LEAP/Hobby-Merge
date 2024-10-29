import { RequestHandler } from "express";
import { Post } from "../../models/post.model";

export const getPost: RequestHandler = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting posts" });
  }
};
