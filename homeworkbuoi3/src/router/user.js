const { request } = require("..");

const express = require('express');
const pool = require(`../utils/db`);

const user = express.Router;
user.get("/", (request, response) => {
    pool.query('select * from `user`;', (err,data)=>{
        if(err) console(err)
        console.log(data)
        response.send(data)
    })
})
module.exports = user;