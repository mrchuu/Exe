import Order from "../model/Order.js";
const placeOrder = async ({ phoneNumber, address, items, receiver }) => {
  try {
    const result = await Order.create({
      phoneNumber,
      address,
      items,
      receiver,
    });
    return result._doc;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getPagedOrder = async ({ index, pageSize }) => {
  try {
    const data = await Order.find()
      .skip(index * pageSize)
      .limit(pageSize)
      .sort("-createdAt")
      .populate("items.item");
    const totalDocument = await Order.countDocuments();
    const totalPages = Math.ceil(totalDocument / pageSize);

    const result = {
      total: totalDocument,
      data: data,
      totalPages: totalPages,
      isLastPage: parseInt(index) + 1 >= totalPages,
    };
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
export default {
  getPagedOrder,
  placeOrder,
};
