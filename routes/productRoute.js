const express = require('express')
const route = express.Router()
const controller = require('../controllers/productController')

route.get('/products', controller.getProduct)
route.get('/products/:id', controller.getProductById)
route.post('/products', controller.addProduct)
route.patch('/products/:id', controller.updateProduct)
route.delete('/products/:id', controller.deleteProduct)

module.exports = route