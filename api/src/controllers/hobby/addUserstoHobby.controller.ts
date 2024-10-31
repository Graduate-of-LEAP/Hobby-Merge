import { RequestHandler } from "express";
import { Hobby } from "../../models/hobby.model";

export const addUserToHobby: RequestHandler = async (req, res) => {
  const { hobbyId, userId } = req.body;

  try {
    const hobby = await Hobby.findById(hobbyId).populate("users");
    if (!hobby) {
      res.status(404).json({ message: "Hobby not found" });
      return;
    }

    if (!hobby.users.includes(userId)) {
      hobby.users.push(userId);
      await hobby.save();
    }

    res.status(200).json({ message: "User added to hobby successfully" });
  } catch (error) {
    console.error("Error adding user to hobby:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
