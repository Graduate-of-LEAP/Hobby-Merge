import { Router } from "express";
import { SavedByCategoryId } from "../controllers/user/saved-by-categoryId.controller";
import { getMe } from "../controllers/user/getme.controller";

const userRouter = Router();

userRouter.get("/", getMe).post("/", SavedByCategoryId);

export { userRouter };
