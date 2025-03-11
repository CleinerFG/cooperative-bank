const { PROFILE_IMGS_DIR } = require('../constants/serverConstants');
const path = require('path');
const fs = require('fs/promises');
const repository = require('../repositories/accountRepository');
const { log } = require('console');

module.exports = {
  async getBalance() {
    return repository.findBalance();
  },
  async getDetails() {
    return repository.findDetails();
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
