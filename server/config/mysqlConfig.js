const { Sequelize } = require('sequelize');
const {
  MYSQL_DB_NAME_BY_ENV,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_HOST,
  MYSQL_PORT,
} = require('./constants');

const sequelize = new Sequelize(
  MYSQL_DB_NAME_BY_ENV,
  MYSQL_USER,
  MYSQL_PASSWORD,
  {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    dialect: 'mysql',
    logging: false,
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

(async () => {
  try {
    await sequelize.authenticate();
    console.log('MySql - Connection has benn establisedh with success');
  } catch (e) {
    console.error('Unable to connect to the database:', e);
  }
})();

module.exports = sequelize;
