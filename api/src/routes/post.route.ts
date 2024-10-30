import { Router } from "express";
import { createPost } from "../controllers/posts/create.post.controller";
import { getPost } from "../controllers/posts/get.post.controller";
import { deletePost } from "../controllers/posts/delete.post.controller";

const postRouter = Router();
postRouter.post("/", createPost);
postRouter.get("/", getPost);
postRouter.delete("/", deletePost);

export { postRouter };
