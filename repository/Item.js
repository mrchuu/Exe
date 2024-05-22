import Item from "../model/Item.js";
const getAllItems = async() =>{
    try {
        const result = await Item.find();
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
}
export default {
    getAllItems
}