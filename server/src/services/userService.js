const {} = require('../types/user/serviceTypes');
const userRepository = require('../repositories/userRepository');
const path = require('path');
const fs = require('fs/promises');
const { PROFILE_IMGS_DIR } = require('../config/constants');
const {
  createUserValidation,
} = require('../lib/helpers/user/serviceValidators');
const { clientErrorsHandler } = require('../lib/handlers/errorsHandler');
const { createPasswordHash } = require('../lib/helpers/paswordHash');

module.exports = {
  /**
   * @param {CreateProps} data
   * @returns {Promise<CreateReturn>}
   */
  async create(data) {
    const [isValid, fields] = await createUserValidation({
      ...data,
    });

    if (!isValid) return clientErrorsHandler(fields);

    const passwordHash = await createPasswordHash(data.password);

    await userRepository.create({
      ...data,
      password: passwordHash,
    });

    return { success: true };
  },

  /**
   * @param {string} cpf
   * @returns {Promise<GetByCpfReturn|null>}
   */
  async getByCpf(cpf) {
    return await userRepository.findByCpf(cpf);
  },

  /**
   * @param {string} opaqueId
   * @returns {Promise<number>}
   */
  async getAccountBalance(opaqueId) {
    const balance = await userRepository.findAccountBalance(opaqueId);
    return Number(balance);
  },

  /**
   * @param {string} opaqueId
   * @returns {Promise<GetAccountDetailsReturn|null>}
   */
  async getAccountDetails(opaqueId) {
    return userRepository.findAccountDetails(opaqueId);
  },

  async getProfileImgPath(opaqueId) {
    const photoPath = path.join(PROFILE_IMGS_DIR, `${opaqueId}.webp`);
    await fs.access(photoPath);
    return photoPath;
  },
};
