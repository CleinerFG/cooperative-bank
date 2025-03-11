const displayErrors = require('../../utils/displayErrors');
const createPool = require('./createPool');
const pool = createPool();

const createDatabase = async (dbName) => {
  let status;

  try {
    console.log(`Trying to create database: ${dbName}`);
    await pool.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
    status = 'Success';
  } catch (e) {
    status = 'Fail';
    console.error('Error setting up the database:');
    displayErrors(e);
  } finally {
    pool.end();
    console.log(`Status: ${status}`);
    console.log('Connection end!');
  }
};

module.exports = createDatabase;
