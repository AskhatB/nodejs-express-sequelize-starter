const express = require('express');
const router = express.Router();

const productController = require('../controllers/product');

router.post('/by-id', productController.getProductById);
router.post('/by-categoty-id', productController.getProductsByCategoryId);

module.exports = router;