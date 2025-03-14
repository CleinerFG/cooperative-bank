const bcrypt = require('bcryptjs');

const createPasswordHash = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (e) {
    console.error('Hash pass error:', e);
    throw e;
  }
};

const comparePassword = async (password, hashedPassword) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (e) {
    console.error('Comapare error:', e);
    throw e;
  }
};

module.exports = { createPasswordHash, comparePassword };
