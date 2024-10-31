import { Request, Response } from "express";
import { User } from "../../models/user.model";

interface CustomRequest extends Request {
  user?: { id: string };
}

export const SavedByHobbyId = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  const { userId, hobbyIds } = req.body;

  if (!userId || !Array.isArray(hobbyIds)) {
    res.status(400).json({ message: "userId and hobbyIds are required" });
    return;
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    if (!user.hobby) {
      user.hobby = [];
    }

    const existingHobbies = new Set(user.hobby.map((id) => id.toString()));

    hobbyIds.forEach((hobbyId) => {
      if (existingHobbies.has(hobbyId)) {
        user.hobby = user.hobby.filter((id) => id.toString() !== hobbyId);
      } else {
        user.hobby.push(hobbyId);
      }
    });

    await user.save();

    res.status(200).json({
      message: "Hobbies updated",
      savedHobbies: user.hobby,
    });
    return;
  } catch (error) {
    console.error("Error in SavedByHobbyId:", error);
    res.status(500).json({
      message: "Internal server error",
      error,
    });
    return;
  }
};

// import { RequestHandler } from "express";
// import { Hobby } from "../../models/hobby.model";
// import { User } from "../../models/user.model";

// export const addUserToHobby: RequestHandler = async (req, res) => {
//   const { hobbyId, userId } = req.body;

//   try {
//     const hobby = await Hobby.findById(hobbyId);
//     if (!hobby) {
//       res.status(404).json({ message: "Hobby not found" });
//       return;
//     }

//     if (!hobby.users.includes(userId)) {
//       hobby.users.push(userId);
//       await hobby.save();
//     }

//     const user = await User.findById(userId);
//     if (user && !user.hobby.includes(hobbyId)) {
//       user.hobby.push(hobbyId);
//       await user.save();
//     }

//     res.status(200).json({ message: "User added to hobby successfully" });
//   } catch (error) {
//     console.error("Error adding user to hobby:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
