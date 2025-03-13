const fs = require('fs/promises');
const path = require('path');
const { pool } = require('./pool');
const { log } = require('../../utils/consoleLogger');

const readSeedsFile = async () => {
  const seedsPath = path.resolve(__dirname, '../default_seeds.sql');

  log('section', 'Reading: default_seeds.sql');
  const sql = await fs.readFile(seedsPath, 'utf-8');
  log('content', 'The file was read: default_seeds.sql');
  return sql.trim().replace(/\s+/g, ' ');
};

module.exports = async (dbName) => {
  const sql = await readSeedsFile();

  log('section', 'Seeding tables...');
  await pool.query(`USE ${dbName}; ${sql}`);
  log('content', 'The tables were seeded');
};
