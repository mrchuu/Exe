import Category from "../model/Category.js";
const getAll = async () =>{
    try {
        const result = await Category.find();
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}
export default {
    getAll
}