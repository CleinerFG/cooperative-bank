const { Sequelize } = require('sequelize');
const {
  MYSQL_DB_NAME_BY_ENV,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_HOST,
  MYSQL_PORT,
} = require('./constants');

module.exports = new Sequelize(
  MYSQL_DB_NAME_BY_ENV,
  MYSQL_USER,
  MYSQL_PASSWORD,
  {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    dialect: 'mysql',
    logging: true,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      underscored: true,
      timestamps: false,
    },
    timezone: '+00:00',
    sync: { force: false },
  }
);
