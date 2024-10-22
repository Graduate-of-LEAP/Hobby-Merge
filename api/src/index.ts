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
<<<<<<< HEAD
import { collectionMessageRouter } from "./routes/collection.message.route";
import categoryRouter from "./routes/category.route";
=======
import { reactionRoute } from "./routes/reaction.route";
import { Server } from "socket.io";
>>>>>>> b2a91a5 (socket)

dotenv.config();

const PORT = process.env.PORT || 3030;

connectToDatabase();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(express.json());

app.use(authMiddleware);

app.use("/auth", authRouter);
app.use("/collection", collectionRouter);
app.use("collectionMessage", collectionMessageRouter);
app.use("/user", userRouter);
app.use("/user/message", userMessageRouter);
app.use("/category", categoryRouter);

app.get("/", (_req, res) => {
  res.json({ message: "Та нэвтрэнэ үү!" });
});
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
