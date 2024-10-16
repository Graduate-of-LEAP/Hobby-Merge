import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectToDatabase } from "./database/connect";

dotenv.config();

connectToDatabase();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "hello" });
});

app.listen(3001, () => {
  console.log("server is running on http://localhost:3001");
});
