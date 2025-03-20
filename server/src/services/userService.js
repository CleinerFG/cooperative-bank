const userRepository = require('../repositories/userRepository');
const path = require('path');
const fs = require('fs/promises');
const { PROFILE_IMGS_DIR } = require('../config/constants');
const { userValidateAll } = require('../lib/helpers/user/createUserValidators');
const {
  clientErrorsHandler,
  serverErrorHandler,
} = require('../lib/helpers/errorsHandler');
const { createPasswordHash } = require('../lib/helpers/paswordHash');

module.exports = {
  async create({ fullName, cpf, birth, email, password }) {
    try {
      const [isValid, fields] = await userValidateAll({
        fullName,
        cpf,
        birth,
        email,
        password,
      });

      if (isValid) {
        const passwordHash = await createPasswordHash(fields.password);
        await userRepository.create({
          fullName: fields.fullName,
          cpf: fields.cpf,
          birth: fields.birth,
          email: fields.email,
          password: passwordHash,
        });
        return { success: true };
      }
      return clientErrorsHandler(fields);
    } catch (e) {
      return serverErrorHandler(e);
    }
  },

  async getByCpf(cpf) {
    // cpfValidator(cpf);
    return userRepository.findByCpf(cpf.replace(/[.-]/g, ''));
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
