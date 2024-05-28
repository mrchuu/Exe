import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      default: "",
    },
  },
  {
    timestamps: true,
    collection: "Category",
  }
);
const Category = mongoose.model("Category", CategorySchema);
export default Category;
