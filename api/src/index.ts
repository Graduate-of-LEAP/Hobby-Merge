import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";

import { connectToDatabase } from "./database/connect";
import {
  authRouter,
  collectionRouter,
  userMessageRouter,
  userRouter,
} from "./routes";

import { authMiddleware } from "./middleware/auth.middleware";
import { collectionMessageRouter } from "./routes/collection.message.route";
import categoryRouter from "./routes/category.route";
import { reactionRoute } from "./routes/reaction.route";
import { Server } from "socket.io";
import { socketAuthMiddleware } from "./middleware/socket.auth.middleware";
import { chatSocket } from "./sockets/chat";
import { connectSocket } from "./sockets/connect.socket";

dotenv.config();

const PORT = process.env.PORT || 3030;

connectToDatabase();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://192.168.11.162:4000"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(cors());
app.use(express.json());

app.use(authMiddleware);
io.use(socketAuthMiddleware);

app.use("/auth", authRouter);
app.use("/collection", collectionRouter);
app.use("collectionMessage", collectionMessageRouter);
app.use("/user", userRouter);
app.use("/user/message", userMessageRouter);
app.use("/category", categoryRouter);

connectSocket(io);
app.get("/", (_req, res) => {
  res.json({ message: "Та нэвтрэнэ үү!" });
});

server.listen(3005, () => {
  console.log("server running at http://localhost:3005");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
