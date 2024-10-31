import { Router } from "express";
import { SavedByCategoryId } from "../controllers/user/saved-by-categoryId.controller";
import { getMe } from "../controllers/user/getme.controller";
import { addUserToHobby } from "../controllers/hobby/addUserstoHobby.controller";

const userRouter = Router();

userRouter
  .get("/", getMe)
  .post("/category", SavedByCategoryId)
  .post("/hobby", addUserToHobby);

export { userRouter };
