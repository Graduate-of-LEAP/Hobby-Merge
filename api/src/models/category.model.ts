import mongoose, { model, Schema } from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },

    hobbies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Hobby",
        required: true,
      },
    ],
  },
  { timestamps: true }
);
export const Category = model("Category", categorySchema);
