import { Socket } from "socket.io";

interface MessageData {
  from: string;
  to: string;
  message: string;
}
interface TypingData {
  from: string;
  to: string;
}

export const chatSocket = (socket: Socket) => {
  socket.on("sendMessage", async (data: MessageData) => {
    socket.broadcast.emit("messageReceived", data);
  });

  socket.on("typing", (data: TypingData) => {
    console.log("typing", data);
    socket.broadcast.emit("userTyping", data);
  });

  socket.on("active", (data: string) => {
    socket.broadcast.emit("activeStatus", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
};
