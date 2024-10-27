import { Router } from "express";
import { SavedByCategoryId } from "../controllers/user/saved-by-categoryId.controller";
import { getMe } from "../controllers/user/getme.controller";
import { SavedByHobbyId } from "../controllers/user/saved-by-hobbyId.controller";

const userRouter = Router();

userRouter
  .get("/", getMe)
  .post("/category", SavedByCategoryId)
  .post("/hobby", SavedByHobbyId);

export { userRouter };
