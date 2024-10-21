import { Router } from "express";
import { getMe } from "../controllers/user/getme.controller";

const userRouter = Router();

userRouter.get("/", getMe);

export { userRouter };
