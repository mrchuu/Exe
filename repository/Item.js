import Item from "../model/Item.js";
const getItems = async (category, name) => {
  try {
    const query = {};
    if (category && category.length > 0) {
      query.category = { $in: category };
    }
    if (name && name.trim().length > 0) {
      const regex = new RegExp(name.split(" ").join(".*"), "i");
      query.name = { $regex: regex };
    }
    const collation = { locale: "vi", strength: 1 };
    const result = await Item.find(query).collation(collation);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getItemsBySingleCategory = async (category) => {
  try {
    const result = await Item.find({
      category: category,
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
        $in: itemsId,
      },
    });
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
const getItemsByName = async (name) => {
  try {
    const result = await Item.find({ name: { $regex: name, $options: "i" } });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
export default {
  getItems,
  getAll,
  getItemsByIds,
  getItemsBySingleCategory,
  getItemsByName,
};
