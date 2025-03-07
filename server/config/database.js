require('dotenv').config();
const mysql = require('mysql2');

const createConnection = () => {
  const host = process.env.MYSQL_HOST;
  const port = process.env.MYSQL_PORT;
  const user = process.env.MYSQL_USER;
  const password = process.env.MYSQL_PASSWORD;

  const connection = mysql.createConnection({
    host,
    user,
    password,
    port,
    database: 'cooperative_bank',
    multipleStatements: true,
  });

  return connection;
};

module.exports = createConnection;
