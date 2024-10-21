import { RequestHandler } from "express";

import { CollectionMessage } from "../../models/collectionMessage.model";

export const getAllcollectionmessage: RequestHandler = async (req, res) => {
  try {
    const collectionmessage = await CollectionMessage.find();
    res.status(200).json(collectionmessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting Collectionmessage" });
  }
};
