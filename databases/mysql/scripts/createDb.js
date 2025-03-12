const createPool = require('./createPool');
const pool = createPool();
const log = require('../../utils/consoleLogger');
const displayErrors = require('../../utils/displayErrors');

module.exports = async (dbName) => {
  let success;
  try {
    log.info(`- Trying to create database: ${dbName}`);
    await pool.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
    success = true;
    return true;
  } catch (e) {
    success = false;
    log.error('- Error creating the database:');
    displayErrors(e);
    return false;
  } finally {
    await pool.end();
    const logType = success ? 'info' : 'error';
    log[logType](`- Success: ${success}`);
    log.info('- Pool connection end');
  }
};
