const {Product} = require('../models/product.model')

module.exports.addProduct = (req, res) => {
    const {name, price, description} = req.body;
    Product.create({
        name,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.showAllProducts = (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.json(err));
}