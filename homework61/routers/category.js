
const categoryController = require('../controllers/category');

const categoryRouter = require('express').Router();


categoryRouter.get('/', getAllCategory);
categoryRouter.get('/:id', getAllCategoryById);
categoryRouter.post('/', createAllCategory);
categoryRouter.put('/', updateAllCategory);
categoryRouter.delete('/:id', deleteCategory);

module.exports = categoryRouter;