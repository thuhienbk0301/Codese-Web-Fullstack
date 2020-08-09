const express = require(`express`);
const pool = require(`../utils/db`);

const order = express.Router;
order.get("/", (request, response) => {
    pool.query('select * from `order`;', (err,data)=>{
        if(err) console(err)
        console.log(data)
        response.send(data)
    })
})
module.exports = order;