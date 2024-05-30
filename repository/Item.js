import Item from "../model/Item.js";
const getItemsByCategory = async (category) => {
  try {
    const result = await Item.find({
      category: {
        $in: category,
      },
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getItemsBySingleCategory = async (category) => {
  try {
    const result = await Item.find({
      category: category
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getItemsByIds = async (itemsId) => {
  try {
    const result = await Item.find({
        _id: {
            $in: itemsId
        }
    })
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getAll = async () => {
  try {
    const result = await Item.find();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
export default {
  getItemsByCategory,
  getAll,
  getItemsByIds,
  getItemsBySingleCategory
};
