import { RequestHandler } from "express";
import { CollectionMessage } from "../../models/collectionMessage.model";

export const createCollectionMessage: RequestHandler = async (req, res) => {
  try {
    const { message, collection, user, posts } = req.body;

    const newCollectionMessage = await CollectionMessage.create({
      message,
      collection,
      user,
      posts,
    });
    res.status(201).json({
      message: "CollectionMessage created successfully",
      CollectionMessage: newCollectionMessage,
    });
  } catch (error) {
    console.error("Create collectionmessage error:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
