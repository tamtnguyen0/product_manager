const ProductController = require('../controllers/product.controller')

module.exports = app => {
    app.get('/api/all', ProductController.showAllProducts);
    app.post('/api/new', ProductController.addProduct);
    app.get('/api/product/:id', ProductController.showOneProduct);
}