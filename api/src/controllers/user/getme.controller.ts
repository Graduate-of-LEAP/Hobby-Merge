import { Request, RequestHandler, Response } from "express";
import { User } from "../../models/user.model";

export const GetMe: RequestHandler = async (req, res) => {
  try {
    const { userID } = req.query;
    const user = await User.findById(userID).select("-password");

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
