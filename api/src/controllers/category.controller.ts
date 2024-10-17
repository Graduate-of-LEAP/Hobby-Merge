import { RequestHandler } from "express";
import { Category } from "../models/category.model";

export const createCategory: RequestHandler = async (req, res) => {
  try {
    const { name, image, collections } = req.body;

    const category = await Category.create({
      name,
      image,
      collections,
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

export const getCategory: RequestHandler = async (req, res) => {
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
