import { RequestHandler } from "express";
import { HobbyMessage } from "../../models/hobbyMessage.model";

export const createHobbyMessage: RequestHandler = async (req, res) => {
  try {
    const { message, hobby, user, posts } = req.body;

    const newHobbyMessage = await HobbyMessage.create({
      message,
      hobby,
      user,
      posts,
    });
    res.status(201).json({
      message: "hobbyMessage created successfully",
      hobbyMessage: newHobbyMessage,
    });
  } catch (error) {
    console.error("Create hobbymessage error:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
