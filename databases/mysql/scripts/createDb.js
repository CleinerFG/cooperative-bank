const displayErrors = require('../../utils/displayErrors');
const createPool = require('./createPool');
const pool = createPool();

const createDatabase = async (dbName) => {
  let status;
  let connection;

  try {
    connection = await pool.getConnection();
    console.log(`[DB Setup] Trying to create database: ${dbName}`);
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
    status = 'Success';
  } catch (e) {
    status = 'Fail';
    console.error('[DB Setup] Error setting up the database:');
    displayErrors(e);
  } finally {
    if (connection) connection.release();
    console.log(`[DB Setup] Status: ${status}`);
    console.log('[DB Setup] Connection released!');
    console.log('---||---');
  }
};

module.exports = createDatabase;
