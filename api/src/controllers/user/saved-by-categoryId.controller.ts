import { Request, Response } from "express";
import { User } from "../../models/user.model";

interface CustomRequest extends Request {
  user?: { id: string };
}

export const SavedByCategoryId = async (req: CustomRequest, res: Response) => {
  console.log(req.user);
  const { userId, categoryId } = req.body;
  try {
    const user = await User.findById(userId);

    if (!user)
      return res.status(404).json({ message: "hereglegch baihgui baina" });

    const alreadyChoosen = user.category?.includes(categoryId);

    if (alreadyChoosen) {
      user.alreadyChoosen = user.alreadyChoosen?.filter(
        (id) => id.toString() !== categoryId
      );
    } else {
      user.alreadyChoosen?.push(categoryId);
    }

    await user.save();

    return res.status(200).json({
      message: alreadyChoosen ? "Category removed" : "Category added",
      savedProduct: user.alreadyChoosen,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Interval server error",
    });
  }
};
