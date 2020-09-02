const express = require('express');
const pool = require("../utils/db");
const { request } = require('..');
const { response } = require('express');

const product = express.Router();
product.get("/", (request, response) => {
    pool.query('select * from `product`;', (err,data)=>{
        if(err) console(err)
        console.log(data)
        response.send(data)
    })
})
module.exports = product;