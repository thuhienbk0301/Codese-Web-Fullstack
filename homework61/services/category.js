const db = require('../utils/db')

const getAllCategory = async()=>{
    const sql = 'SELECT * FROM category';
    const data = await db.queryMulti(sql);
    return data;
    

};
const getAllCategoryById = async(id) =>{
    const sql = 'SELECT * FROM category WHERE categoryId = ?;' ;
    const data = await db.queryOne(sql,[id])
    return data
};
const createAllCategory = async(display, description, price) =>{
    console.log({display, description, price})
    const sql = `
    INSERT INTO category(display, description, price )
    VALUES(?,?,?);`
    
    await db.query(sql, [display, description, price]);
};

const updateAllCategory = async(id, display, description, price) =>{
    
    const sql = `
    UPDATE category
    SET
      display = ?,
      description = ?,
      price = ?
    WHERE categoryId = ?'`
    
    await db.query(sql, [id, display, description, price]);
};

const deleteCategory = async(id) =>{
    
    const sql = `
    DELETE FROM category
    WHERE categoryId = ?;`
    
    await db.query(sql, [id]
};



module.exports = {
    getAllCategory,
    getAllCategoryById,
    createAllCategory,
    updateAllCategory,
    deleteCategory

}