import jwt from "jsonwebtoken";

export const verifyToken = (token: string) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }
  return jwt.verify(token, process.env.JWT_SECRET) as jwt.JwtPayload;
};
