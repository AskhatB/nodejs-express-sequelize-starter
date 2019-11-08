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
  parent_id: Sequelize.INTEGER,
  search_name: Sequelize.STRING(2555)
};

const Category = sequelize.define('categories', model, config);

module.exports = Category;