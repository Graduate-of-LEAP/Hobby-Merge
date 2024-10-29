import { Router } from "express";
import { createPost } from "../controllers/posts/create.post";
import { getPost } from "../controllers/posts/get.post";

const postRouter = Router();
postRouter.post("/", createPost);
postRouter.get("/", getPost);

export { postRouter };
