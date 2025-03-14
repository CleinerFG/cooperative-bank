const fs = require('fs/promises');
const path = require('path');
const { getConnection } = require('./config');
const { log } = require('../../utils/consoleLogger');

const readSchemaFile = async () => {
  const schemaPath = path.resolve(__dirname, '../schema.sql');

  log('section', 'Reading schema.sql...');
  const sql = await fs.readFile(schemaPath, 'utf-8');
  log('content', 'The file was read: schema.sql');
  return sql.trim().replace(/\s+/g, ' ');
};

module.exports = async () => {
  const sql = await readSchemaFile();
  const connection = await getConnection()

  log('section', 'Creating tables...');
  await connection.query(sql);
  log('content', 'The tables were created');
};
