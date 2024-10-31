import { RequestHandler } from "express";
import { User } from "../../models/user.model";

export const GetUsersHobbyId: RequestHandler = async (req, res) => {
  const { hobbyId } = req.params;

  try {
    const users = await User.find({ hobby: hobbyId });
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users by hobby:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
