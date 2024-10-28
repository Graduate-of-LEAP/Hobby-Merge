import { RequestHandler } from "express";
import { Hobby } from "../../models/hobby.model";

export const getAllHobby: RequestHandler = async (req, res) => {
  try {
    const hobbies = await Hobby.find();
    res.status(200).json(hobbies);
  } catch (error) {
    console.error("Error retrieving hobbies:", error);
    res.status(500).json({ message: "Error retrieving hobbies" });
  }
};
