import { Router } from "express";
import { createReaction, deleteReaction, getAllReactions, updateReaction } from "../controllers/reaction/reaction.controller";

const reactionRoute = Router();

reactionRoute.post("/", createReaction);
reactionRoute.get("/", getAllReactions);
reactionRoute.delete("/:id", deleteReaction);
reactionRoute.put("/:id", updateReaction);
export { reactionRoute };
