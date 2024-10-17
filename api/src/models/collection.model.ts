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
        required: false,
      },
    ],
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: false,
      },
    ],
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "CollectionMessage",
        required: false,
      },
    ],
  },
  { timestamps: true }
);
export const Collection = model("Collection", collectionSchema);
