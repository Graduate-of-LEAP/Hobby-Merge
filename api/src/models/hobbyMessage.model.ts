import mongoose, { model, Schema } from "mongoose";

const hobbyMessageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    hobby: {
      type: Schema.Types.ObjectId,
      ref: "Hobby",
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
export const HobbyMessage = model("HobbyMessage", hobbyMessageSchema);
