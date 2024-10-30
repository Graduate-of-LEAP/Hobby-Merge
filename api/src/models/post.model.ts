import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
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
     
    },
    comments: {
      ref: "Comment",
      type: Schema.Types.ObjectId,
     
    },
  },

  { timestamps: true }
);
export const Post = mongoose.model("Post", postSchema);
