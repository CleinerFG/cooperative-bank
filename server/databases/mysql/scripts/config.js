const mysql = require('mysql2/promise');
const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = require('../../../config/constants');
const { log, logRow } = require('../../utils/consoleLogger');

const pool = mysql.createPool({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  port: MYSQL_PORT,
  multipleStatements: true,
  waitForConnections: true,
  connectionLimit: 1,
  queueLimit: 0,
});

let connectionInstance = null;
const getConnection = async () => {
  if (!connectionInstance) {
    log('section', 'Establishing pool connection...');
    connectionInstance = await pool.getConnection();
    await connectionInstance.query("SET time_zone='+00:00'");
    log('content', 'Connection established');
    logRow('section');
  }
  return connectionInstance;
};

const closePool = async () => {
  log('section', 'Closing pool connection...');
  const connection = await getConnection();
  connection.release();
  await pool.end();
  log('content', 'Pool was closed');
};

module.exports = { getConnection, closePool };
