const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category');

router.post('/by-id', categoryController.getCategoryById);
router.get('/all', categoryController.getAllCategories);

module.exports = router;