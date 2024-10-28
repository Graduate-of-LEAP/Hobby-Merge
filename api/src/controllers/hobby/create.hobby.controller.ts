import { RequestHandler } from "express";
import { Hobby } from "../../models/hobby.model";

export const createHobby: RequestHandler = async (req, res) => {
  try {
    const { name, description, cover_image, categoryId } = req.body;

    const newHobby = await Hobby.create({
      name,
      description,
      cover_image,
      category: categoryId,
    });

    res.status(201).json({
      message: "Hobby created successfully",
      hobby: newHobby,
    });
  } catch (error) {
    console.error("Create Hobby error:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
