import { RequestHandler } from "express";
import { HobbyMessage } from "../../../models/hobbyMessage.model";

export const deleteHobbyMessage: RequestHandler = async (re, res) => {
  try {
    const deleteHobbyMessage = await HobbyMessage.deleteOne();

    res.status(200).json(deleteHobbyMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting Hobbymessage" });
  }
};
