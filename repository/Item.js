import Item from "../model/Item.js";
const getItems = async (category, name) => {
  try {
    // Initialize the query object
    const query = {};

    // Add category filter if category is not an empty array
    if (category && category.length > 0) {
      query.category = { $in: category };
    }

    // Add name filter if name is not an empty string or null
    if (name && name.trim().length > 0) {
      query.$text = { $search: name };
    }

    // Define collation options for case-insensitive and accent-insensitive matching
    const collation = { locale: "vi", strength: 2 }; // Use strength 2 for diacritic insensitivity

    let result;

    if (query.$text) {
      // Perform the text search with collation
      result = await Item.find(query, { score: { $meta: "textScore" } })
        .collation(collation)
        .sort({ score: { $meta: "textScore" } });
    } else {
      // Perform the query without text search
      result = await Item.find(query);
    }

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
