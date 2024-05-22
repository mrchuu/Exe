import ItemRepository from "../repository/Item.js";
import express from "express";
const itemRouter = express.Router();
itemRouter.get("/", async (req, res) => {
  try {
    const result = await ItemRepository.getAllItems();
    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default itemRouter;
