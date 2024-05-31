import Review from "../model/Review.js";
const getPaginatedReviews = async (index) => {
  try {
    const data = await Review.find()
      .skip(index * 8)
      .limit(8)
      .sort("-createdAt");
    const totalDocument = await Review.countDocuments();
    console.log(totalDocument);
    const totalPages = Math.ceil(totalDocument / 8);
    const result = {
      data: data,
      totalPages: totalPages,
      isLastPage: parseInt(index) + 1 >= totalPages,
    };
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
const addReview = async ({ name, content, images, rating }) => {
  try {
    const result = await Review.create({
      name, content, images, rating
    })
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
export default {
  getPaginatedReviews,
  addReview
};
