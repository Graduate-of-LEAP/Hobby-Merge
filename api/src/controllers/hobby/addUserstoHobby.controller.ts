import { RequestHandler } from "express";
import { Hobby } from "../../models/hobby.model";

export const addUserToHobby: RequestHandler = async (req, res) => {
  try {
    const { hobbyId, userId } = req.body;

    const hobby = await Hobby.findByIdAndUpdate(
      hobbyId,
      { $addToSet: { users: userId } },
      { new: true }
    );

    if (!hobby) {
      res.status(404).json({ message: "Hobby not found" });
      return;
    }

    res.json({ message: "User added to hobby", hobby });
  } catch (error) {
    console.error("Add User to Hobby error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
