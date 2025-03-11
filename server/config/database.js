require('dotenv').config();
const mysql = require('mysql2');

if (!process.env.MYSQL_HOST) {
  throw new Error('Missing .env variables. Ensure MYSQL_HOST is set.');
}

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
    database: 'cooperative_bank',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })
  .promise();

module.exports = pool;
