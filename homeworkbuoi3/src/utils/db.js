const { response } = require("express")

const mysql = require('mysql')

const config = {
    host: 'localhost',
    port: 3306, // default = 3306
    user: 'root', 
    password: '0963192631',
    database: 'shopee'
}
const pool = mysql.createPool(config) // nen dung pool thay vi cach 2


//cach 2: mysql.createConnection(config) //tao ra 1 ket noi, don luong

//module.exports = pool

