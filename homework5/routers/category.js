// cach 1: 
// const express = require('express');
// const Route = express.Router();

//Cach 2:
const categoryController = require('../controllers/category')
const Route = require('express').Router();


Route.get('/', getAllCategory);
Route.get('/:id', getAllCategoryById);
Route.post('/', createAllCategory);
Route.put('/', updateAllCategory);
Route.delete('/:id', deleteAllCategory)

module.exports = Route;