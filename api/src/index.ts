import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectToDatabase } from "./database/connect";
import {
  authRouter,
  collectionRouter,
  userMessageRouter,
  userRouter,
} from "./routes";
import { authMiddleware } from "./middleware/auth.middleware";
import { reactionRoute } from "./routes/reaction.route";

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
app.use("/user/message", userMessageRouter);
app.use("/reaction", reactionRoute);

app.get("/", (_req, res) => {
  res.json({ message: "hello" });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
