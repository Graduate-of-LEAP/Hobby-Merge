import { RequestHandler } from "express";
import { Post } from "../../models/post.model";

export const deletePost: RequestHandler = async (req, res) => {
  try {
    const deletePost = await Post.deleteOne();
    if (!deletePost) {
      res.status(404).json({
        message: "error",
      });
    }
    res.status(200).json({
      category: deletePost,
    });
  } catch (error) {
    console.error(error);
  }
};
