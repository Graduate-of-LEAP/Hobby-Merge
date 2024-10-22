import { verifyToken } from "./verify.token";
import { Socket } from "socket.io";

interface CustomSocket extends Socket {
  userID?: string;
}

export const socketAuthMiddleware = (
  socket: CustomSocket,
  next: (err?: any) => void
) => {
  const token = socket.handshake.auth.token;

  if (!token) {
    next(new Error("Authentication error: Token not found"));
    return;
  }

  try {
    const decodedUser = verifyToken(token);
    socket.userID = decodedUser.id;
    next();
  } catch (err) {
    console.error("Socket authentication error:", err);
    next(new Error("Authentication error: Token verification failed"));
    return;
  }
};
