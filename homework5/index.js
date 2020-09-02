const express = require('express');
const app = express();
const categoryRoute = require('./routers/category')
app.use('/api/v1/category', categoryRoute)
// dia chi IP :  localhost / 127.0.0.1 / so hieu cong (port: max = 2^32, nen chay cong so to 1 ti, so nho thuong co nguoi dky roi)
// HTTP 80

// methods:tuong duong voi CRUD
// GET ( HOI, Chi lay du lieu) - READ
// post - CREAT
// put - UPDATE
// delete - DELETE

const hamxuli = (req,res)=>{
    //client : req cau hoi
    // server: res cau tra loi
    res.send('Hello ')
}
app.get('/', hamxuli)




// app.listen phai viet o cuoi file
app.listen(7000, err =>{
    if(err) console.log(err);
    console.log('Running');
})  // http methods dia chi IP : so cong , thi se dien tren web la " localhost:6000"


//BASE_URL: codedidungso.me/api/v1

// account
//Create : POST 