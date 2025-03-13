const fs = require('fs/promises');
const path = require('path');
const { pool } = require('./config');
const log = require('../../utils/consoleLogger');

const readSchemaFile = async () => {
  const seedsPath = path.resolve(__dirname, '../default_seeds.sql');

  log.info('-> Reading: default_seeds.sql');
  const sql = await fs.readFile(seedsPath, 'utf-8');
  log.info('- The file was read: default_seeds.sql');
  return sql.trim().replace(/\s+/g, ' ');
};

module.exports = async (dbName) => {
  const sql = await readSchemaFile();

  log.info('-> Seeding tables...');
  await pool.query(`USE ${dbName}; ${sql}`);
  log.info('- The tables were seeded');
};
