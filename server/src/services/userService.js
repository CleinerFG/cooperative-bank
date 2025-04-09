const Service = require('./Service');
const userRepository = require('../repositories/userRepository');
const path = require('path');
const fs = require('fs/promises');
const { PROFILE_IMGS_DIR } = require('../config/constants');
const {
  createUserValidation,
} = require('../lib/helpers/user/serviceValidators');
const { clientErrorsHandler } = require('../lib/handlers/errorsHandler');
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
    const a = await this.repository.findAccountDetails(opaqueId);
    console.log(a);
    return a;
  }
}

const userService = new UserService();

module.exports = userService;

// module.exports = {
//   async create(data) {
//     const [isValid, fields] = await createUserValidation({
//       ...data,
//     });

//     if (!isValid) return clientErrorsHandler(fields);

//     const passwordHash = await createPasswordHash(data.password);

//     await userRepository.create({
//       ...data,
//       password: passwordHash,
//     });

//     return { success: true };
//   },

//   async getByCpf(cpf) {
//     return await userRepository.findByCpf(cpf);
//   },

//   async getAccountBalance(opaqueId) {
//     const balance = await userRepository.findAccountBalance(opaqueId);
//     return Number(balance);
//   },

//   async getAccountDetails(opaqueId) {
//     return userRepository.findAccountDetails(opaqueId);
//   },

//   async getProfileImgPath(opaqueId) {
//     const photoPath = path.join(PROFILE_IMGS_DIR, `${opaqueId}.webp`);
//     await fs.access(photoPath);
//     return photoPath;
//   },
// };
