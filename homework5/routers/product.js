const productController = require('../controllers/product');
const { getAllProduct, createAllProduct, updateAllProduct, deleteAllProduct } = require('../controllers/product');
const product = require('express').Router();


product.get('/', getAllProduct);
product.get('/', getAllProduct);
product.post('/', createAllProduct);
product.put('/', updateAllProduct);
product.delete('/:id', deleteAllProduct)

module.exports = product;