import OrderRepository from "../repository/Order.js";
import express from "express";
const orderRouter = express.Router();
orderRouter.post("/", async (req, res) => {
  try {
    const { phoneNumber, address, items, receiver, total, note } = req.body;

    const result = await OrderRepository.placeOrder({
      phoneNumber,
      address,
      items,
      receiver,
      total,
      note
    });
    return res
      .status(201)
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
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
orderRouter.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await OrderRepository.deleteOrder(id);
    return res
      .status(200)
      .json({ data: result, message: "Đã xoá thành công đơn hàng" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
orderRouter.patch("/update/:id", async(req, res)=>{
  try {
    const id = req.params.id;
    const {confirmed, shipped} = req.body;
    const result = await OrderRepository.updateOrder(confirmed, shipped, id);
    return res.status(200).json({data: result, message: "update thành công"})
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
})
export default orderRouter;
