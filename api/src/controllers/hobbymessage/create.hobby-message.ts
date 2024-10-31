import { Request, Response } from "express";
import { HobbyMessage } from "../../models/hobbyMessage.model";

interface CustomRequest extends Request {
  userID?: string;
}

export const createHobbyMessage = async (req: CustomRequest, res: Response) => {
  try {
    const { message, hobby, posts } = req.body;

    const newHobbyMessage = await HobbyMessage.create({
      message,
      hobby,
      user: req.userID,
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
