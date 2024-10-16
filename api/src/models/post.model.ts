import mongoose from "mongoose";
import { User } from "./user.model";
import { Reaction } from "./reaction.model";
 
const postSchema = new mongoose.Schema(
  {
    user:{
        type:User
    },
    content: {
      type: String,
      required: true,
    },
    postimages:{
        type: [String],
        required: true,
      },
      viewcount:{
        type: Number,
        default: 0,
      },
      reaction:{
        type: [Reaction],
        required: true,
      },
      comments: {
        type: [Comment],
        required: true,
        
      }

    },

  { timestamps: true }
);
export const Post = mongoose.model("Post", postSchema);
 