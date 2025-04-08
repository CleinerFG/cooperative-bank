const bcrypt = require('bcryptjs');
const PasswordHashingError = require('../../errors/PasswordHashingError');

const createPasswordHash = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (err) {
    throw new PasswordHashingError(err.message);
  }
};

const comparePassword = async (password, hashedPassword) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (err) {
    throw new PasswordHashingError(err.message);
  }
};

module.exports = { createPasswordHash, comparePassword };
