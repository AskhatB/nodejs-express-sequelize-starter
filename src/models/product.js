const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const config = {
  timestamps: false
}

const model = {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING(255),
  category_id: Sequelize.INTEGER,
  description: Sequelize.STRING(65000),
  features: Sequelize.JSON,
  price_data: Sequelize.JSON,
  overview: Sequelize.STRING(10000),
  images: Sequelize.JSON,
  category_hierarchy: Sequelize.STRING(2555),
  category_name: Sequelize.STRING(255),
  brand: Sequelize.STRING(255)
};

const Product = sequelize.define('products', model, config);

module.exports = Product;
