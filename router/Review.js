import ReviewRepository from "../repository/Review.js";
import express from "express";
const reviewRouter = express.Router();
reviewRouter.get("/list/:index", async (req, res) => {
  try {
    const index = req.params.index;
    const result = await ReviewRepository.getPaginatedReviews(index);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
reviewRouter.post("/", async (req, res) => {
  try {
    const { name, content, images, rating } = req.body;
    const result = await ReviewRepository.addReview({
      name,
      content,
      images,
      rating,
    });
    return res
      .status(201)
      .json({ data: result, message: "Thêm phản hồi thành công" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default reviewRouter;
