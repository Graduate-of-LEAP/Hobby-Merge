import { Request, Response } from "express";
import { User } from "../../models/user.model";

interface CustomRequest extends Request {
  user?: { id: string };
}

export const SavedByCategoryId = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  const { userId, categoryIds } = req.body;

  if (!userId || !Array.isArray(categoryIds)) {
    res.status(400).json({ message: "userId and categoryIds are required" });
    return;
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    if (!user.category) {
      user.category = [];
    }

    const existingCategories = new Set(
      user.category.map((id) => id.toString())
    );

    categoryIds.forEach((categoryId) => {
      if (existingCategories.has(categoryId)) {
        user.category = user.category.filter(
          (id) => id.toString() !== categoryId
        );
      } else {
        user.category.push(categoryId);
      }
    });

    await user.save();

    res.status(200).json({
      message: "Categories updated",
      savedCategories: user.category,
    });
    return;
  } catch (error) {
    console.error("Error in SavedByCategoryId:", error);
    res.status(500).json({
      message: "Internal server error",
      error,
    });
    return;
  }
};
