const Category = require('../models/category');

exports.getCategoryById = async (req, res) => {
  try {
    const categoryResponse = await Category.findByPk(req.body.categoryId);
    return res.status(200).json(categoryResponse);
  } catch (error) {
    console.error(error);
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categoriesResponse = await Category.findAll();
    return res.status(200).json(categoriesResponse);
  } catch (error) {
    console.error(error);
  }
};
