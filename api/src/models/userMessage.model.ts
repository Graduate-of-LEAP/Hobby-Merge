import mongoose, { model, Schema } from "mongoose";

const userMessageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    from: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    to: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
export const UserMessage = model("UserMessage", userMessageSchema);
