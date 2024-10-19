import { Router } from "express";
import {
  createUserMessage,
  deleteUserMessageID,
  deleteUserMessageUserID,
  getAllUserMessage,
  getUserMessageID,
  getUserMessageUserID,
  updateUserMessageID,
} from "../controllers/user/message.controller";

const userMessageRouter = Router();

userMessageRouter
  .get("/", getAllUserMessage)
  .get("/:id", getUserMessageID)
  .get("/:user", getUserMessageUserID)
  .post("/", createUserMessage)
  .put("/:id", updateUserMessageID)
  .delete("/:id", deleteUserMessageID)
  .delete("/:user", deleteUserMessageUserID);

export { userMessageRouter };
