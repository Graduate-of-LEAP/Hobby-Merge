import { Router } from "express";
import { createHobby, getAllHobby } from "../controllers/hobby";
import { deleteHobby } from "../controllers/hobby/delete.hobby.controller";
import { addUserToHobby } from "../controllers/hobby/addUserstoHobby.controller";

const hobbyRouter = Router();

hobbyRouter.post("/", createHobby);
hobbyRouter.get("/", getAllHobby);
hobbyRouter.delete("/:id", deleteHobby);
hobbyRouter.post("/addUser", addUserToHobby);

export { hobbyRouter };
