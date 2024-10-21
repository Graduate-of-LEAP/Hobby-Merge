import { RequestHandler } from "express";
import { Category } from "../../models/category.model";

export const getCategories: RequestHandler = async (_req, res) => {
  try {
    const categories = await Category.find({});

    res.status(200).json({
      categories,
    });
  } catch (error) {
    res.status(500).json({
      message: "Aldaa garlaa",
    });
  }
};
