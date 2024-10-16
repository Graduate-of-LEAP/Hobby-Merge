import { RequestHandler } from "express";
import { User } from "../../models/user.model";

export const Register: RequestHandler = async (req, res): Promise<void> => {
  const { id, name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "Email is already registered" });
      return;
    }

    const newUser = await User.create({
      id,
      name,
      email,
      password,
    });

    res.status(201).json({
      message: "Registered successfully",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
