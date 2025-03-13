const fs = require('fs/promises');
const path = require('path');
const { pool } = require('./pool');
const { log } = require('../../utils/consoleLogger');

const readPopulateSeedsFile = async () => {
  const populatePath = path.resolve(__dirname, '../populate_data_seeds.sql');

  log('section', 'Reading populate_data_seeds.sql...');
  const sql = await fs.readFile(populatePath, 'utf-8');
  log('content', 'The file was read: populate_data_seeds.sql');
  return sql.trim().replace(/\s+/g, ' ');
};

module.exports = async (dbName) => {
  const sql = await readPopulateSeedsFile();
  log('section', 'Populating tables...');
  await pool.query(`USE ${dbName}; ${sql}`);
  log('content', 'The tables were populeted');
};
