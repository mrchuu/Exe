import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import itemRouter from "./router/Item.js";
import orderRouter from "./router/Order.js";
import reviewRouter from "./router/Review.js";
import categoryRouter from "./router/Category.js";
const app = express();
dotenv.config();
// const allowedOrigins = [
//   "http://localhost:3000",
//   "https://baca.nnmonday.click/", "https://baca.nnmonday.click/",
// ];
const corsOptions = {
  origin:  "https://maneki-chan.nnmonday.click/",
  methods: "PUT, POST, GET, DELETE, OPTIONS, PATCH",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));

app.use("/api/items", itemRouter);
app.use("/api/order", orderRouter);
app.use("/api/review", reviewRouter);
app.use("/api/category", categoryRouter);
const port = process.env.PORT || 9999;
const MONGODB_URI = process.env.MONGODB_URI;
app.listen(port, async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error.message}`);
  }
  console.log(`Server running on http://localhost:${port}`);
});
