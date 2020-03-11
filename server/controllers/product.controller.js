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

module.exports.showOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(error => res.json(error));
}