const bcrypt = require('bcryptjs');
const {
  PasswordHashingError,
  ComparePasswordError,
} = require('../../errors/HashingError');

const createPasswordHash = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (e) {
    throw new PasswordHashingError(e.message);
  }
};

const comparePassword = async (password, hashedPassword) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (e) {
    throw new ComparePasswordError(e.message);
  }
};

module.exports = { createPasswordHash, comparePassword };
