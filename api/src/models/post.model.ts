import mongoose, { Schema } from "mongoose";
import { User } from "./user.model";
import { Reaction } from "./reaction.model";

const postSchema = new mongoose.Schema(
  {
    user: {
      ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
    postImages: {
      type: [String],
      required: true,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    reaction: {
      ref: "Reaction",
      type: Schema.Types.ObjectId,
      required: true,
    },
    comments: {
      ref: "Comment",
      type: Schema.Types.ObjectId,
      required: true,
    },
  },

  { timestamps: true }
);
export const Post = mongoose.model("Post", postSchema);
