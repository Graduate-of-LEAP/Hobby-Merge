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
  .get("/id/:id", getUserMessageID)
  .get("/user/:user", getUserMessageUserID)
  .post("/", createUserMessage)
  .put("/:id", updateUserMessageID)
  .delete("/id/:id", deleteUserMessageID)
  .delete("/user/:user", deleteUserMessageUserID);

export { userMessageRouter };
