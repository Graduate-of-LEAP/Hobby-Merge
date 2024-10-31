import { Router } from "express";
import {
  createHobbyMessage,
  deleteHobbyMessage,
  getAllHobbyMessage,
} from "../controllers/hobbymessage";

const hobbyMessageRouter = Router();

hobbyMessageRouter.post("/", createHobbyMessage);
hobbyMessageRouter.get("/hobby/:id", getAllHobbyMessage);
hobbyMessageRouter.delete("/:id", deleteHobbyMessage);

export { hobbyMessageRouter };
