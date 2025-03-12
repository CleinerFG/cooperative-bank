const displayErrors = require('../../utils/displayErrors');
const createPool = require('./createPool');
const pool = createPool();

module.exports = async (dbName) => {
  let status;

  try {
    console.log(`Trying to create database: ${dbName}`);
    await pool.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
    status = 'Success';
    return true;
  } catch (e) {
    status = 'Fail';
    console.error('Error creating the database:');
    displayErrors(e);
    return false;
  } finally {
    await pool.end();
    console.log(`Status: ${status}`);
    console.log('Pool connection end');
  }
};
