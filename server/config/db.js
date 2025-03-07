const fs = require('fs').promises;
const path = require('path');

let cachedDb = null;

const loadDb = async () => {
  console.log('load data');
  try {
    const data = await fs.readFile(
      path.resolve(__dirname, `../db/database.json`),
      'utf-8'
    );
    return JSON.parse(data);
  } catch (e) {
    console.error('Error loading database:', e);
    return null;
  }
};

const getDb = async () => {
  console.log(cachedDb);

  if (!cachedDb) {
    cachedDb = await loadDb();
  }
  return cachedDb;
};

const reloadDb = async () => {
  cachedDb = await loadDb();
  return cachedDb;
};

module.exports = { getDb, reloadDb };
