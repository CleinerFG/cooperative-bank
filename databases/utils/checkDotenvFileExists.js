const fs = require('fs/promises');
const path = require('path');
const NotFoundDotenvFileError = require('../errors/NotFoundDotenvFileError');

module.exports = async () => {
  try {
    const dotenvPath = path.resolve(__dirname, '../.env');
    await fs.access(dotenvPath);
  } catch (e) {
    throw new NotFoundDotenvFileError();
  }
};
