const Sequelize = require('sequelize');
const dbConfig = require('../config/databases/mysql');

const connection = new Sequelize(dbConfig);

module.exports = connection;
