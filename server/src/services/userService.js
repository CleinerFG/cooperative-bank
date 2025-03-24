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
} = require('../lib/handlers/errorsHandler');
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

  async getAccountBalance(opaqueId) {
    try {
      const balance = await userRepository.findAccountBalance(opaqueId);
      return Number(balance);
    } catch (e) {
      return serverErrorHandler(e);
    }
  },

  async getAccountDetails(opaqueId) {
    try {
      return userRepository.findAccountDetails(opaqueId);
    } catch (e) {
      return serverErrorHandler(e);
    }
  },

  async getProfileImgPath(opaqueId) {
    try {
      const photoPath = path.join(PROFILE_IMGS_DIR, `${opaqueId}.webp`);
      await fs.access(photoPath);
      return photoPath;
    } catch (e) {
      return serverErrorHandler(e);
    }
  },
};
