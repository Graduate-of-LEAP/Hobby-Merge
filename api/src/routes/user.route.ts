import { Router } from "express";
import { getMe } from "../controllers/user/getme.controller";
import { SavedByCategoryId } from "../controllers/user/saved-by-categoryId.controller";

const userRouter = Router();

userRouter.get("/", getMe).post("/", SavedByCategoryId);

export { userRouter };
