import Order from "../model/Order.js";
const placeOrder = async ({ phoneNumber, address, items}) => {
  try {
    const result = await Order.create({
      phoneNumber,
      address,
      items
    });
    return result._doc;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getPagedOrder = async ({ index, pageSize }) => {
  try {
    const result = await Order.find()
      .skip(index * pageSize)
      .limit(pageSize)
      .sort("-createdAt")
      .populate("items.item");
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
export default {
  getPagedOrder,
  placeOrder
}