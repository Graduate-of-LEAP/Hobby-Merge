import { RequestHandler } from "express";
import { CollectionMessage } from "../../models/collectionMessage.model";

export const deleteCollectionMesssage: RequestHandler = async (re, res) => {
  try {
    const deleteCollectionMesssage = await CollectionMessage.deleteOne();

    res.status(200).json(deleteCollectionMesssage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting Collectionmessage" });
  }
};
