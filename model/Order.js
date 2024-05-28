import mongoose, { Schema } from "mongoose";
import Item from "./Item.js";
const ItemDto = new Schema({
  item: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  amount: {
    type: Number,
    required: true,
  },
});
const OrderSchema = new Schema(
  {
    phoneNumber: {
      type: String,
      required: true,
    },
    receiver: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true,
    },
    items: {
      type: [ItemDto],
      default: [],
    },
    shipped: {
      type: Boolean,
      default: false,
    },
    confirmed: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
    collection: "Order",
  }
);
const Order = mongoose.model("Order", OrderSchema);
export default Order;
