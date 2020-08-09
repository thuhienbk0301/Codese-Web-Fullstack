const express = require(`express`);
const pool = require(`../utils/db`);

const category = express.Router;
category.get("/", (request, response) => {
    pool.query('select * from `category`;', (err,data)=>{
        if(err) console(err)
        console.log(data)
        response.send(data)
    })
})
module.exports = category;