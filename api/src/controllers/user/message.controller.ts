import { RequestHandler, Request, Response } from "express";
import { UserMessage } from "../../models/userMessage.model";

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
  } catch (error) {
    console.error("Get user message error:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
export const createUserMessage: RequestHandler = async (req, res) => {
  try {
    const { to, message } = req.body;

    const newCollection = await UserMessage.create({
      to,
      message,
    });

    res.status(201).json({
      messages: "Collection created successfully",
      collection: newCollection,
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
