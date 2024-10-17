import { RequestHandler } from "express";
import { User } from "../../models/user.model";
import jwt from "jsonwebtoken";

export const Login: RequestHandler = async (req, res): Promise<void> => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      res
        .status(401)
        .json({ message: "Ta email esvel password oo shalaga uu" });
      return;
    }

    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
      },
      process.env.JWT_SECRET as string
    );

    res.json({
      token,
      user: {
        email: user.email,
        id: user.id,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
