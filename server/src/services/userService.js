const userRepository = require('../repositories/userRepository');
const path = require('path');
const fs = require('fs/promises');
const { PROFILE_IMGS_DIR } = require('../config/constants');
const { userValidateAll } = require('../lib/helpers/user/createUserValidators');
const {
  removeTimestamp,
  removeCpfFormatting,
} = require('../lib/utils/dataNormalizer');
const {
  clientErrorsHandler,
  serverErrorHandler,
} = require('../lib/helpers/errorsHandler');

module.exports = {
  async create({ fullName, cpf, birth, email, password }) {
    try {
      const normalizedCpf = removeCpfFormatting(cpf);

      const [isValid, errors] = await userValidateAll({
        fullName,
        cpf: normalizedCpf,
        birth,
        email,
        password,
      });

      if (isValid) {
        return await userRepository.create({
          fullName,
          cpf: normalizedCpf,
          birth: removeTimestamp(birth),
          email,
          password,
        });
      }
      return clientErrorsHandler(errors);
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
