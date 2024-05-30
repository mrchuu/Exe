import ItemRepository from "../repository/Item.js";
import express from "express";
const itemRouter = express.Router();
itemRouter.post("/", async (req, res) => {
  try {
    const categories = req.body.categories;
    if (categories.length > 0) {
      const result = await ItemRepository.getItemsByCategory(categories);
      return res.status(200).json({ data: result });
    } else {
      const result = await ItemRepository.getAll();
      return res.status(200).json({ data: result });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
itemRouter.post("/getItemsById", async (req, res) => {
  try {
    const itemIds = req.body.items;
    const result = await ItemRepository.getItemsByIds(itemIds);
    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
itemRouter.get("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const result = await ItemRepository.getItemsBySingleCategory(categoryId);
    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default itemRouter;
