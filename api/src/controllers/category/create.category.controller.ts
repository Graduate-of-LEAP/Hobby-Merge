import { RequestHandler } from "express";
import { Category } from "../../models/category.model";

export const createCategory: RequestHandler = async (req, res) => {
  try {
    const { name, image, hobbies } = req.body;

    const category = await Category.create({
      name,
      image,
      hobbies,
    });
    res.status(201).json({
      message: "category uuslee",
      category,
    });
  } catch (error) {
    res.status(500).json({
      message: "Aldaa garlaa",
    });
  }
};
