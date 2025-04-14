const Service = require('./Service');
const userRepository = require('../repositories/userRepository');
const path = require('path');
const fs = require('fs/promises');
const { PROFILE_IMGS_DIR } = require('../config/constants');
const {
  createUserValidation,
} = require('../lib/helpers/user/serviceValidators');
const { createPasswordHash } = require('../lib/helpers/paswordHash');
const InvalidFieldsError = require('../errors/InvalidFieldsError');

class UserService extends Service {
  constructor() {
    super(userRepository);
  }

  async create(data) {
    const [isValid, fields] = await createUserValidation({
      ...data,
    });

    if (!isValid) throw new InvalidFieldsError(fields);

    const passwordHash = await createPasswordHash(data.password);

    await super.create({
      ...data,
      password: passwordHash,
    });

    return { success: true };
  }

  async getAccountBalance(opaqueId) {
    const balance = await this.repository.findAccountBalance(opaqueId);
    return +balance;
  }

  async getAccountDetails(opaqueId) {
    return this.repository.findAccountDetails(opaqueId);
  }

  async getByCpf(cpf) {
    return this.repository.findByCpf(cpf);
  }
}

const userService = new UserService();

module.exports = userService;
