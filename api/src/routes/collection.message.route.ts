import { Router } from "express";
import { createCollectionMessage } from "../controllers/collectionmessage/create.collection-message";
import { getAllcollectionmessage } from "../controllers/collectionmessage/get.collection-message";
import { deleteCollectionMesssage } from "../controllers/collectionmessage/delete.collection-message";

const collectionMessageRouter = Router();

collectionMessageRouter.post(
  "/createCollectionMessage",
  createCollectionMessage
);
collectionMessageRouter.get(
  "/getAllCollectionMessage",
  getAllcollectionmessage
);
collectionMessageRouter.delete(
  "/deleteCollectionMessage",
  deleteCollectionMesssage
);

export { collectionMessageRouter };
