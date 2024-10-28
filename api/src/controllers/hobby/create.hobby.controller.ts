import { RequestHandler } from "express";
import { Hobby } from "../../models/hobby.model";

export const createHobby: RequestHandler = async (req, res) => {
  try {
    const { name, description, cover_image, users, posts, messages } = req.body;

    const newHobby = await Hobby.create({
      name,
      description,
      cover_image,
      users,
      posts,
      messages,
    });

    res.status(201).json({
      messages: "Hobby created successfully",
      Hobby: newHobby,
    });
  } catch (error) {
    console.error("Create Hobby error:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
