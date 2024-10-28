import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";

import { connectToDatabase } from "./database/connect";
import { authMiddleware } from "./middleware/auth.middleware";
import { Server } from "socket.io";
import { socketAuthMiddleware } from "./middleware/socket.auth.middleware";
import { connectSocket } from "./sockets/connect.socket";

dotenv.config();

const PORTSOCKET = process.env.SOCKET || 3005;
connectToDatabase();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["*"],
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

app.use(authMiddleware);
io.use(socketAuthMiddleware);

connectSocket(io);

server.listen(PORTSOCKET, () => {
  console.log(`server running at ${PORTSOCKET}`);
});
