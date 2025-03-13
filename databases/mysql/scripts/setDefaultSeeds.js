const fs = require('fs/promises');
const path = require('path');
const { pool } = require('./config');
const log = require('../../utils/consoleLogger');

const readSchemaFile = async () => {
  const seedsPath = path.resolve(__dirname, '../default_seeds.sql');

  log.info('- Reading: default_seeds.sql');
  const sql = await fs.readFile(seedsPath, 'utf-8');
  return sql.trim().replace(/\s+/g, ' ');
};

module.exports = async (dbName) => {
  const sql = await readSchemaFile();

  log.info('- Tables seeding with default seeds');
  await pool.query(`USE ${dbName}; ${sql}`);
};
