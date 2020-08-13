const getAllCategory = (req,res)=>{
    res.send('get all')
}
const getAllCategoryById = (req,res)=>{
    console.log(req.params);
    console.log(req.body);
    res.send({
        name: 'Hien'
    })
}
const createAllCategory = (req,res)=>{
    res.send('create')
}
const updateAllCategory = (req,res)=>{
    res.send('update')
}
const deleteAllCategory = (req,res)=>{
    res.send('delete')
}
module.exports = {
    getAllCategory,// thuoc tinh voi ham trung ten thi chi can viet 1 lan , dang le la viet :getAllCategory(doi tuong) : getAllCategory(ham)
    getAllCategoryById,
    createAllCategory
}