const ProductController = require('../controllers/product.controller')

module.exports = app => {
    app.get('/api', ProductController.showAllProducts);
    app.post('/api/new', ProductController.addProduct);
}