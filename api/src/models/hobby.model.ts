import mongoose, { model, Schema } from "mongoose";

const hobbySchema = new mongoose.Schema(
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
      required: false,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
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
        required: false,
      },
    ],
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "HobbyMessage",
        required: false,
      },
    ],
  },
  { timestamps: true }
);
export const Hobby = model("Hobby", hobbySchema);
