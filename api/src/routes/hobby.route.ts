import { Router } from "express";
import { createHobby, getAllHobby } from "../controllers/hobby";
import { getIdHobby } from "../controllers/hobby/getId.hobby.controller";

const hobbyRouter = Router();

hobbyRouter.post("/", createHobby);
hobbyRouter.get("/", getAllHobby);
hobbyRouter.get("/:id", getIdHobby);

export { hobbyRouter };
