const orderController = require('../controllers/order');
const { getAllOrder } = require('../controllers/order');
const order = require('express').Router();


order.get('/', getAllOrder);

order.post('/', createAllOrder);
order.put('/', updateAllOrder);
order.delete('/:id', deleteAllOrder)

module.exports = order;