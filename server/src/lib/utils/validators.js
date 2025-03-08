const StringError = require('../../errors/StringError');

const isString = (value) => {
  if (typeof value !== 'string') {
    throw new StringError('id');
  }
};

module.exports = { isString };
