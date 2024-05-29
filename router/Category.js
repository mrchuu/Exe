import express from "express";
import CategoryRepository from "../repository/Category.js";
const categoryRouter = express.Router();
categoryRouter.get("/", async (req, res) => {
  try {
    const result = await CategoryRepository.getAll();
    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default categoryRouter;