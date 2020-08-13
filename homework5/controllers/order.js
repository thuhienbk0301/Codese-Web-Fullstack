const getAllOrder = (req,res)=>{
    res.send('get all')
}
// const getAllOrder = (req,res)=>{
//     console.log(req.params);
//     console.log(req.body);
//     res.send({
//         name: 'Hien'
//     })
// }
const createAllOrder = (req,res)=>{
    res.send('create')
}
const updateAllOrder = (req,res)=>{
    res.send('update')
}
const deleteAllOrder = (req,res)=>{
    res.send('delete')
}
module.exports = {
    getAllOrder,// thuoc tinh voi ham trung ten thi chi can viet 1 lan , dang le la viet :getAllCategory(doi tuong) : getAllCategory(ham)
    createAllOrder,
    updateAllOrder,
    deleteAllOrder
}