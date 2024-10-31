import { RequestHandler } from "express";
import { HobbyMessage } from "../../models/hobbyMessage.model";

export const getAllHobbyMessage: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const hobbyMessage = await HobbyMessage.find({
      hobby: id,
    });
    res.status(200).json(hobbyMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting hobbyMessage" });
  }
};
