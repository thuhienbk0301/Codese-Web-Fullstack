const userController = require('../controllers/user';
const { getUser, createUser, updateUser, deleteUser } = require('../controllers/user');
const user = require('express').Router();


user.get('/', getUser);
user.get('/', getUser);
user.post('/', createUser);
user.put('/', updateUser);
user.delete('/:id', deleteUser)

module.exports = user;