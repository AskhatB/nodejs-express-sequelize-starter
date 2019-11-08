const Product = require('../models/product');

exports.getProductById = async (req, res) => {
  try {
    const productResponse = await Product.findByPk(req.body.productId);
    return res.status(200).json(productResponse);
  } catch (error) {
    console.error(error);
  }
};

exports.getProductsByCategoryId = async (req, res) => {
  try {
    const productsResponse = await Product.findAll({
      where: { category_id: req.body.categoryId }
    });
    return res.status(200).json(productsResponse);
  } catch (error) {
    console.error(error);
  }
};
