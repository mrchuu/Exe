import mongoose, { Schema } from "mongoose";

const ReviewSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "Người dùng ẩn danh"
    },
    rating: {
        type: Number,
        required: true, 
        default: 5
    },
    content: {
        type: String,
        required: true
    },
    images: {
        type: [String]
    }
}, {
    timestamps: true,
    collection: "Review"
})
const Review = mongoose.model("Review", ReviewSchema);
export default Review;
