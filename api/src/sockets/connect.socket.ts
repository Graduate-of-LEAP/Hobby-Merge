import { Socket, Server } from "socket.io";
import { chatSocket } from "./chat";
import { User } from "../models/user.model";
import mongoose from "mongoose";
interface CustomSocket extends Socket {
  userID?: string;
}
export const connectSocket = (io: Server) => {
  io.on("connection", async (socket: CustomSocket) => {
    if (!socket.userID || !mongoose.Types.ObjectId.isValid(socket.userID)) {
      console.log("Invalid or missing userID");
      return socket.disconnect();
    }

    try {
      const user = await User.findById(socket.userID).select("-password");

      if (!user) {
        console.log("User not found");
        return socket.disconnect();
      }

      console.log(`${user.name} connected`);
      chatSocket(socket);

      socket.on("disconnect", () => {
        console.log(`${user.name} disconnected`);
      });
    } catch (error) {
      console.log("Error during user lookup", error);
      socket.disconnect(); // Optionally disconnect on error
    }
  });
};
