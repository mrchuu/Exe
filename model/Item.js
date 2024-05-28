import mongoose, { Schema } from "mongoose";
import Category from "./Category.js";
const ItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      default: "cái",
    },
    image: {
      type: String,
      default: "https://m.media-amazon.com/images/I/41Q5dBKkvKL.jpg",
    },
    description: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },
  },
  {
    timestamps: true,
    collection: "Item",
  }
);
const Item = mongoose.model("Item", ItemSchema);
export default Item;
