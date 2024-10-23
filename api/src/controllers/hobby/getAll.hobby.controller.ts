import { RequestHandler } from "express";
import { Hobby } from "../../models/hobby.model";

export const getAllHobby: RequestHandler = async (req, res) => {
  try {
    const Hobbies = await Hobby.find();
    res.status(200).json(Hobbies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting Hobbies" });
  }
};
