import { RequestHandler, Request, Response } from "express";
import { UserMessage } from "../../models/userMessage.model";
import { User } from "../../models/user.model";

interface CustomRequest extends Request {
  userID?: string;
}

export const getAllUserMessage: RequestHandler = async (_req, res) => {
  try {
    const userMeessages = await UserMessage.find({});
    res.status(200).json({ userMeessages });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const getUserMessageUserID: RequestHandler = async (req, res) => {
  try {
    const { user } = req.params;
    const message = await UserMessage.find({
      $or: [{ from: user }, { to: user }],
    });
    res.status(200).json(message);
  } catch (error) {
    console.error("Get user message error:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
export const getUserMessageID: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await UserMessage.findById(id);
    res.status(200).json(message);
  } catch (error) {
    console.error("Get user message error:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
export const createUserMessage = async (req: CustomRequest, res: Response) => {
  try {
    const { to, message } = req.body;
    const newHobby = await UserMessage.create({
      to,
      from: req.userID,
      message,
    });

    res.status(201).json({
      messages: "hobby created successfully",
      hobby: newHobby,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const updateUserMessageID: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const deleteUserMessageID: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    console.error("Get user message error:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
export const deleteUserMessageUserID: RequestHandler = async (req, res) => {
  try {
    const { user } = req.params;
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
