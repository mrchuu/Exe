import Item from "../model/Item.js";
const getItemsByCategory = async(category) =>{
    try {
        const result = await Item.find({category: category});
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
}
const getAll = async () =>{
    try {
        const result = await Item.find();
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
}
export default {
    getItemsByCategory,
    getAll
}