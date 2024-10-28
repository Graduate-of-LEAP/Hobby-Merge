import { Router } from "express";
import { createHobby, getAllHobby } from "../controllers/hobby";
import { deleteHobby } from "../controllers/hobby/delete.hobby.controller";

const hobbyRouter = Router();

hobbyRouter.post("/", createHobby);
hobbyRouter.get("/", getAllHobby);
hobbyRouter.delete("/:id", deleteHobby);

export { hobbyRouter };
