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

    collections: [
      {
        type: Schema.Types.ObjectId,
        ref: "Collection",
        required: false,
      },
    ],
  },
  { timestamps: true }
);
export const Category = model("Category", categorySchema);
