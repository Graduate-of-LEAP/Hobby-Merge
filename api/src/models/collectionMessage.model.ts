import mongoose, { model, Schema } from "mongoose";

const collectionMessageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    collection: {
      type: Schema.Types.ObjectId,
      ref: "Collection",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  { timestamps: true }
);
export const CollectionMessage = model(
  "CollectionMessage",
  collectionMessageSchema
);
