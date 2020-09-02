const getAllProduct = (req,res)=>{
    res.send('get all')
}
const getAllProductById = (req,res)=>{
    console.log(req.params);
    console.log(req.body);
    res.send({
        name: 'Hien'
    })
}
const createAllProduct = (req,res)=>{
    res.send('create')
}
const updateAllProduct = (req,res)=>{
    res.send('update')
}
const deleteAllProduct = (req,res)=>{
    res.send('delete')
}
module.exports = {
    getAllProduct,// thuoc tinh voi ham trung ten thi chi can viet 1 lan , dang le la viet :getAllCategory(doi tuong) : getAllCategory(ham)
    getAllProductById,
    createAllProduct,
    updateAllProduct,
    deleteAllProduct
}