const getUser = (req,res)=>{
    res.send('get all')
}

const createUser = (req,res)=>{
    res.send('create')
}
const updateUser = (req,res)=>{
    res.send('update')
}
const deleteUser = (req,res)=>{
    res.send('delete')
}
module.exports = {
    getUser,// thuoc tinh voi ham trung ten thi chi can viet 1 lan , dang le la viet :getAllCategory(doi tuong) : getAllCategory(ham)
    createUser,
    updateUser,
    deleteUser
}