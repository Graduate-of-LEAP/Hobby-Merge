import mongoose, { model, Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    collection: {
      type: Schema.Types.ObjectId,
      ref: "Collection",
      required: true,
    },
    reaction: {
      type: Schema.Types.ObjectId,
      ref: "Reaction",
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export const User = model("User", userSchema);
