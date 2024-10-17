import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: object;
}

export const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.path.startsWith("/auth")) {
    return next();
  }

  const auth = req.headers.authorization;
  const token = auth?.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    const user = jwt.verify(
      token as string,
      process.env.JWT_SECRET
    ) as jwt.JwtPayload;

    req.user = user;
    next();
  } catch (err) {
    console.error("Authentication error:", err);
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
};
