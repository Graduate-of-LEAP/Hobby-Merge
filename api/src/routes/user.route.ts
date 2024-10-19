import { Router } from "express";
import { GetMe } from "../controllers/user/getme.controller";

const userRouter = Router();

userRouter.get("/me", GetMe);

export { userRouter };
