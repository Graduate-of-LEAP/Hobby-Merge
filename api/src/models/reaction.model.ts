import mongoose from "mongoose";
 
const reactionSchema = new mongoose.Schema(
  {
    reaction: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const Reaction = mongoose.model("Reaction", reactionSchema);
 