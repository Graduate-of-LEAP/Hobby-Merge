import { RequestHandler } from "express";
import { Hobby } from "../../models/hobby.model";

//get id by hobby controller
export const getIdHobby: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const Hobbies = await Hobby.findById(id).populate("users");
    res.status(200).json(Hobbies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting Hobbies" });
  }
};
