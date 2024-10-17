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
      required: false,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: false,
    },
    collection: {
      type: Schema.Types.ObjectId,
      ref: "Collection",
      required: false,
    },
    reaction: {
      type: Schema.Types.ObjectId,
      ref: "Reaction",
      required: false,
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
  { timestamps: false }
);
export const User = model("User", userSchema);
