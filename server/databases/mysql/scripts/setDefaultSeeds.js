const fs = require('fs/promises');
const path = require('path');
const { getConnection } = require('./config');
const { log } = require('../../utils/consoleLogger');

const readSeedsFile = async () => {
  const seedsPath = path.resolve(__dirname, '../default_seeds.sql');

  log('section', 'Reading: default_seeds.sql');
  const sql = await fs.readFile(seedsPath, 'utf-8');
  log('content', 'The file was read: default_seeds.sql');
  return sql.trim().replace(/\s+/g, ' ');
};

module.exports = async () => {
  const sql = await readSeedsFile();
  const connection = await getConnection();

  log('section', 'Seeding tables...');
  await connection.query(sql);
  log('content', 'The tables were seeded');
};
