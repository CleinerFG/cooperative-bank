const { PROFILE_IMGS_DIR } = require('../constants/serverConstants');
const path = require('path');
const fs = require('fs/promises');
const repository = require('../repositories/userRepository');

module.exports = {
  async getBalance() {
    // Test abstract id
    return repository.findBalanceById(6);
  },
  async getDetails() {
    // Test abstract id
    return repository.findDetailsById(6);
  },
  /**
   * @param {string} id
   */
  async getProfileImgPathById(id) {
    const photoPath = path.join(PROFILE_IMGS_DIR, `${id}.webp`);
    await fs.access(photoPath);
    return photoPath;
  },
};
