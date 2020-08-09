
const express = require('express');
// // const { response } = require('express');
// // const dbUtils = require('./utils/db');
const pool = require('./utils/db');
// // const { error } = require('console');
const app = express();

const product = require(`./router/product`);
app.use('/product', product);

const user = require(`./router/user`);
app.user('/user', user);

const order = require(`./router/order`);
app.user('/order', order);

const category = require(`./router/category`);
app.use('./category', category);

// const { resolve } = require("path");
// const { rejects } = require("assert");




app.listen(8080, (err)=>{
    if (err) {console.log(err)} else 
    console.log("App listen at 8080")
})





   
// //     })
// // const callback = ()=>{
// //     console.log("Running at 8080")
// // }

// // app.listen(8080, callback)

// const object1 = {
//     thuoctinh1 : "hien",
//     thuoctinh2 : "LTU16B",
//     thuoctinh3 : "xinh gai",
// }
// // //cach 1
// // const tt1 = object1.thuoctinh1;
// // //cach 2
// // const {thuoctinh1} = object1;
// // console.log(thuoctinh1);


// // const getData = async()=>{

// // }
// // const fun1 = async() => {
// //     const congviec1 = await getData()

// // }
// // const getData2 = (callback)=>{
// //     callback()
// // }

// // const excutor = (resolve, reject)=>{
// //     resolve(10)
// // }
// // const prom = new Promise(excutor)

// // prom.then(
// //     data=>{
// //         console.log(data)
// //     }
// // )

// const getData = (number)=>{
//     return new Promise(resolve, reject)=>{
//         if(number==0) reject ('Khong doc duoc')
//         else
//         resolve(100/number)
//     })
// }
// getData(12).then(
//     resolve=>{
//         console.log(resolve)
//     }
// )
// .catch(
//     reject=>{
//         console.log(reject)
//     }
// )

