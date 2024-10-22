import { RequestHandler } from "express";
import { Category } from "../../models/category.model";

export const deleteCategory: RequestHandler = async (req, res) => {
  try {
    const deleteCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deleteCategory) {
      res.status(404).json({
        message: "error",
      });
    }
    res.status(200).json({
      category: deleteCategory,
    });
  } catch (error) {
    console.error(error);
  }
};
