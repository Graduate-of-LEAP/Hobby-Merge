import mongoose, { model, Schema } from "mongoose";

const postReactionSchema = new mongoose.Schema(
  {
    reaction: {
      type: String,
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
export const PostReaction = model("PostReaction", postReactionSchema);
