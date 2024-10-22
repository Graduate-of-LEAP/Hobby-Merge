import { Request, Response } from "express";
import { User } from "../../models/user.model";

interface CustomRequest extends Request {
  user?: { id: string };
}

export const getMe = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  try {
    if (!req.user || !req.user.id) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    } else {
      const userData = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        category: user.category,
        collection: user.collection,
        reaction: user.reaction,
        lastLogin: user.lastLogin,
        isVerified: user.isVerified,
      };
      res.json(userData);
      return;
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    return;
  }
};
