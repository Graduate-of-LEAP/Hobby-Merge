import { RequestHandler } from "express";
import { Collection } from "../../models/collection.model";
import { Z_PARTIAL_FLUSH } from "zlib";

export const getAllcollection: RequestHandler = async (req, res) => {
  try {
    const collection = await Collection.find();
    res.status(200).json(collection);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting Collection" });
  }
};
