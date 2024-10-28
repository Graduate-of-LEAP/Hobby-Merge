import { Router } from "express";
import { createHobby, getAllHobby } from "../controllers/hobby";

const hobbyRouter = Router();

hobbyRouter.post("/", createHobby);
hobbyRouter.get("/", getAllHobby);

export { hobbyRouter };
