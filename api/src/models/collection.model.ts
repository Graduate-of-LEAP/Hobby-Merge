import mongoose, { model, Schema } from "mongoose";

const collectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    cover_image: {
      type: String,
      required: true,
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "CollectionMessage",
      },
    ],
  },
  { timestamps: true }
);
export const Collection = model("Collection", collectionSchema);
