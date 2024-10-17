import { RequestHandler } from "express";
import { Collection } from "../../models/collection.model";

export const createCollection: RequestHandler = async (req, res) => {
  try {
    const { name, description, cover_image, users, posts, messages } = req.body;

    const newCollection = await Collection.create({
      name,
      description,
      cover_image,
      users,
      posts,
      messages,
    });

    res.status(201).json({
      messages: "Collection created successfully",
      collection: newCollection,
    });
  } catch (error) {
    console.error("Create collection error:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
