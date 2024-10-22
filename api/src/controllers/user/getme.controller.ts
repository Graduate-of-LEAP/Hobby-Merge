import { Request, Response } from "express";
import { User } from "../../models/user.model";

interface CustomRequest extends Request {
  userID?: string;
}

export const getMe = async (req: CustomRequest, res: Response) => {
  try {
    const user = await User.findById(req.userID).select("-password");

    if (!user) {
      res.status(404).json({ message: "user not found" });
      return;
    }

    res.json({ user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
