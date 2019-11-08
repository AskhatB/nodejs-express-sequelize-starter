const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', '2509', {
  dialect: 'postgres',
  host: 'localhost'
});

module.exports = sequelize;