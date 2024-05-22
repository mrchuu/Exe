import mongoose, { Schema } from "mongoose";
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
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    collection: "Item",
  }
);
const Item = mongoose.model("Item", ItemSchema);
export default Item;
