
const categoryService = require('../services/category')

const getAllCategory = async(req,res)=>{
    const data = await categoryService.getAllCategory
    res.send({
        status: 1,
        data
    })
}   
const getAllCategoryById = (req,res)=>{
    const {id} = req.params;
    const data = await categoryService.getAllCategoryById(id)
    res.send({
        status: 1,
        data
    })
}
const createAllCategory = (req,res)=>{
    await categoryService.createAllCategory(req.body)
    res.send({
        status: 1,
        
    })
}
const updateAllCategory = (req,res)=>{
    await categoryService.updateAllCategory(req.body)
    res.send({
        status: 1,
        
    })
}
const deleteCategory = (req,res)=>{
    await categoryService.deleteCategory(req.body)
    res.send({
        status: 1,
        data
    })
}
module.exports = {
    getAllCategory,// thuoc tinh voi ham trung ten thi chi can viet 1 lan , dang le la viet :getAllCategory(doi tuong) : getAllCategory(ham)
    getAllCategoryById,
    updateAllCategory,
    createAllCategory,
    deleteCategory
}