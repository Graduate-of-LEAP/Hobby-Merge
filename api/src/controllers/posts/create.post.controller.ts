import { RequestHandler } from "express";
import { Post } from "../../models/post.model";

export const createPost: RequestHandler = async (req, res) => {
  try {
    const { user, content, postImages, viewCount, reaction, comments } =
      req.body;
    const newPost = await Post.create({
      user,
      content,
      postImages,
      viewCount,
      reaction,
      comments,
    });
    res.status(201).json({
      messages: "Амжилттай",
      post: newPost,
    });
  } catch (error) {
    console.error("Create post error:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
