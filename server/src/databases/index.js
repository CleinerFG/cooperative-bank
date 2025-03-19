const Sequelize = require('sequelize');
const dbConfig = require('../config/databases/mysql');

const sequelize = new Sequelize(dbConfig);

module.exports = sequelize;
