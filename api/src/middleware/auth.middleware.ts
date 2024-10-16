// import { NextFunction, Response, Request } from "express";
// import jwt, { JwtPayload } from "jsonwebtoken";

// interface CustomRequest extends Request {
//   user?: object;
// }

// interface TokenPayload extends JwtPayload {
//   user?: object;
// }

// const authMiddleware = (
//   req: CustomRequest,
//   res: Response,
//   next: NextFunction
// ) => {
//   if (req.path.startsWith("/auth")) return next();

//   const auth = req.headers.authorization;
//   const token = auth?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   try {
//     if (!process.env.JWT_SECRET) {
//       throw new Error("JWT_SECRET is not defined");
//     }

//     // Verify the token and assert its type
//     const decoded = jwt.verify(token, process.env.JWT_SECRET) as TokenPayload;

//     // Check if the 'user' property exists in the decoded token
//     if (!decoded || !decoded.user) {
//       res.status(401).json({ error: "Unauthorized" });
//     }

//     req.user = decoded.user; // Attach the user to the request
//     next();
//   } catch (err) {
//     console.error("Authentication error:", err);
//     res.status(401).json({ error: "Unauthorized" });
//   }
// };

// export default authMiddleware;

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
  if (
    req.path.startsWith("/auth") ||
    req.path.startsWith("/product") ||
    req.path.startsWith("/category")
  )
    next();

  const auth = req.headers.authorization;
  const token = auth?.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
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
  }
};
