const userRepository = require('../repositories/userRepository');
const path = require('path');
const fs = require('fs/promises');
const { PROFILE_IMGS_DIR } = require('../config/constants');
const {
  createUserValidation,
} = require('../lib/helpers/user/serviceValidators');
const {
  clientErrorsHandler,
  serverErrorHandler,
} = require('../lib/helpers/errorsHandler');
const { createPasswordHash } = require('../lib/helpers/paswordHash');

module.exports = {
  async create({ fullName, cpf, birth, email, password }) {
    try {
      const [isValid, fields] = await createUserValidation({
        cpf,
        email,
      });

      if (!isValid) return clientErrorsHandler(fields);

      const passwordHash = await createPasswordHash(password);

      await userRepository.create({
        fullName: fullName,
        cpf: cpf,
        birth: birth,
        email: email,
        password: passwordHash,
      });
      return { success: true };
    } catch (e) {
      return serverErrorHandler(e);
    }
  },

  async getByCpf(cpf) {
    try {
      return await userRepository.findByCpf(cpf);
    } catch (e) {
      return serverErrorHandler(e);
    }
  },

  async getBalance() {
    // Test abstract id
    return userRepository.findBalanceById(6);
  },
  async getDetails() {
    // Test abstract id
    return userRepository.findDetailsById(6);
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
