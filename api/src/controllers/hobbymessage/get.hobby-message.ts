import { RequestHandler } from "express";
import { HobbyMessage } from "../../models/hobbyMessage.model";

export const getAllHobbyMessage: RequestHandler = async (req, res) => {
  try {
    const hobbyMessage = await HobbyMessage.find();
    res.status(200).json(hobbyMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting hobbyMessage" });
  }
};
