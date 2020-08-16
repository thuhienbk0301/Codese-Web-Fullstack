

const mysql = require('mysql')

const config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // default = 3306
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD
    database: process.env.DB_DATABASE
}
const config = process.env.API_PORT;
// BTVN: an cai config nay bang .env su dung dotenv
const pool = mysql.createPool(config) 

const query = (sql, params)=>{
    return new Promise((resolve, reject)=>{
        pool.query(sql,params,(err,result)=>{
            if(err)reject(err)
            else resolve(result)

        })
    })

}


const queryOne = (sql, param)=>{
    return new Promise((resolve, reject)=>{
        pool.query(sql,params,(err,result)=>{
            if(err)reject(err)
            else resolve(result[0])

        })
    })

}
// queryOne co the viet la: return query(sql,param)
const queryMulti= (sql, param)=>{
    return new Promise((resolve, reject)=>{
        pool.query(sql,params,(err,result)=>{
            if(err)reject(err)
            else resolve(result)

        })
    })

}
module.exports = {
    
    query, // ham chay, ko tra ve kq
    queryOne, // chay. tra ve 1 kq
    queryMulti // chay. tra ve nhieu kq
}
