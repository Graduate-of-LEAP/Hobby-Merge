import { Router } from "express";
import { Register } from "../controllers/auth/register.controller";
import { Login } from "../controllers/auth/login.controller";

const authRouter = Router();

authRouter.post("/register", Register).post("login", Login);

export { authRouter };
