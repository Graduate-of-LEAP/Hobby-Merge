import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectToDatabase } from "./database/connect";
import { authRouter, collectionRouter } from "./routes";
import { authMiddleware } from "./middleware/auth.middleware";
import { userRouter } from "./routes/user.route";

dotenv.config();

const PORT = process.env.PORT || 3030;

connectToDatabase();

const app = express();

app.use(cors());
app.use(express.json());

app.use(authMiddleware);

app.use("/auth", authRouter);
app.use("/collection", collectionRouter);
app.use("/user", userRouter);

app.get("/", (_req, res) => {
  res.json({ message: "hello" });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
