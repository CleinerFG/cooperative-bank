const { PROFILE_IMGS_DIR } = require('../config/constants');
const path = require('path');
const fs = require('fs/promises');
const repository = require('../repositories/userRepository');
const { cpfValidator } = require('../lib/utils/validators');

module.exports = {
  async getByCpf() {
    cpfValidator(cpf);
    return repository.findByCpf(cpf.replace(/[.-]/g, ''));
  },

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
