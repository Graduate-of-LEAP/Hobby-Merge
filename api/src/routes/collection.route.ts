import { Router } from "express";
import { createCollection, getAllcollection } from "../controllers/collection";

const collectionRouter = Router();

collectionRouter.post("/createCollection", createCollection);
collectionRouter.get("/getAllcollection", getAllcollection);

export { collectionRouter };
