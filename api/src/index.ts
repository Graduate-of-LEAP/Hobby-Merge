import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectToDatabase } from "./database/connect";
import { authRouter, collectionRouter } from "./routes";
import { authMiddleware } from "./middleware/auth.middleware";

dotenv.config();

connectToDatabase();

const app = express();

app.use(cors());
app.use(express.json());

// app.use(authMiddleware);

app.use("/auth", authRouter);
app.use("/collection", collectionRouter);

app.get("/", (_req, res) => {
  res.json({ message: "hello" });
});

app.listen(3001, () => {
  console.log("server is running on http://localhost:3001");
});
