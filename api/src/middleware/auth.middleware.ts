import { NextFunction, Response, Request } from "express";
import { verifyToken } from "./verify.token";

interface CustomRequest extends Request {
  userID?: string;
}

export const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.path.startsWith("/auth")) {
    return next();
  }
  if (req.path.startsWith("/socket.io")) {
    return next();
  }

  const auth = req.headers.authorization;
  const token = auth?.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const decodedUser = verifyToken(token);
    req.userID = decodedUser.id;
    next();
  } catch (err) {
    console.error("Authentication error:", err);
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
};
