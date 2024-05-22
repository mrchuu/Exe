import OrderRepository from "../repository/Order.js";
import express from "express";
const orderRouter = express.Router();
orderRouter.post("/", async (req, res) => {
  try {
    const { phoneNumber, address, items } = req.body;

    const result = await OrderRepository.placeOrder({
      phoneNumber,
      address,
      items,
    });
    return res
      .status(200)
      .json({ data: result, message: "đặt hàng thành công" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
orderRouter.get("/list", async (req, res) => {
  try {
    const index = req.query.index || 0;
    const pageSize = req.query.pageSize || 8;
    const result = await OrderRepository.getPagedOrder({
      index,
      pageSize,
    });
    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default orderRouter
