const fs = require('fs/promises');
const path = require('path');
const { pool } = require('./config');
const log = require('../../utils/consoleLogger');

const readSchemaFile = async () => {
  const schemaPath = path.resolve(__dirname, '../schema.sql');

  log.info('-> Reading schema.sql...');
  const sql = await fs.readFile(schemaPath, 'utf-8');
  log.info('- The file was read: schema.sql');
  return sql.trim().replace(/\s+/g, ' ');
};

module.exports = async (dbName) => {
  const sql = await readSchemaFile();

  log.info('-> Creating tables...');
  await pool.query(`USE ${dbName}; ${sql}`);
  log.info('- The tables were created');
};
