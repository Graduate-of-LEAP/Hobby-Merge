import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";

import { connectToDatabase } from "./database/connect";
import {
  authRouter,
  hobbyRouter,
  userMessageRouter,
  userRouter,
} from "./routes";
import { authMiddleware } from "./middleware/auth.middleware";
import categoryRouter from "./routes/category.route";
import { Server } from "socket.io";
import { socketAuthMiddleware } from "./middleware/socket.auth.middleware";
import { connectSocket } from "./sockets/connect.socket";
import { hobbyMessageRouter } from "./routes/hobby.message.route";
import { postRouter } from "./routes/post.route";
import Multer, { memoryStorage } from "multer";
import { v2 as cloudinary } from "cloudinary";
import { createCloudinaryController } from "./controllers/cloudinary/create-cloudinary.controller";

dotenv.config();

const PORT = process.env.PORT || 3030;
const PORTSOCKET = process.env.SOCKET || 3005;
connectToDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = memoryStorage();

const upload = Multer({
  storage,
});

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", PORTSOCKET.toString()],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(cors());
app.use(express.json());

app.use(authMiddleware);
io.use(socketAuthMiddleware);

app.use("/auth", authRouter);
app.use("/hobby", hobbyRouter);
app.use("hobbyMessage", hobbyMessageRouter);
app.use("/user", userRouter);
app.use("/user/message", userMessageRouter);
app.use("/category", categoryRouter);
app.use("/post", postRouter);

connectSocket(io);

app.post("/upload", upload.single("image"), createCloudinaryController);

app.get("/", (_req, res) => {
  res.json({ message: "Та нэвтрэнэ үү!" });
});

server.listen(PORTSOCKET, () => {
  console.log(`server running at ${PORTSOCKET}`);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
