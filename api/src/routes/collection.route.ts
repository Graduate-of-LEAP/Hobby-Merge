import { Router } from "express";
import { createCollection } from "../controllers/collection";

const collectionRouter = Router();

collectionRouter.post("/createCollection", createCollection);

export { collectionRouter };
