const {} = require('../types/user/repositoryTypes');
const UserModel = require('../models/UserModel');

module.exports = {
  /**
   * @param {CreateProps} data
   * @returns {Promise<boolean>}
   */
  async create(data) {
    const user = await UserModel.create({
      fullName: data.fullName,
      cpf: data.cpf,
      birth: data.birth,
      email: data.email,
      password: data.password,
      balance: 100000,
    });
    return user ? true : false;
  },

  /**
   * @returns {Promise<FindReturn[]|null>}
   */
  async findAll() {
    const users = await UserModel.findAll();
    if (users.length > 0) {
      return users.map((user) => {
        return {
          id: user.id,
          opaqueId: user.opaqueId,
          fullName: user.fullName,
          cpf: user.cpf,
          birth: user.birth,
          email: user.email,
          balance: user.balance,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        };
      });
    }
    return null;
  },

  /**
   * @param {string} email
   * @returns {Promise<FindByEmailReturn|null>}
   */
  async findByEmail(email) {
    const user = await UserModel.findOne({
      where: { email },
      attributes: ['opaqueId', 'password'],
    });

    if (user) {
      return {
        opaqueId: user.opaqueId,
        passwordHash: user.password,
      };
    }
    return null;
  },

  /**
   * @param {string} cpf
   * @returns {Promise<FindByCpfReturn|null>}
   */
  async findByCpf(cpf) {
    const user = await UserModel.findOne({
      where: { cpf },
      attributes: ['cpf', 'fullName'],
    });

    if (user) {
      return {
        cpf: user.cpf,
        fullName: user.fullName,
      };
    }
    return null;
  },

  /**
   * @param {string} email
   * @returns {Promise<string|null>}
   */
  async findEmail(email) {
    const user = await UserModel.findOne({
      where: { email },
      attributes: ['email'],
    });
    return user ? user.email : null;
  },

  /**
   * @param {string} cpf
   * @returns {Promise<string|null>}
   */
  async findCpf(cpf) {
    const user = await UserModel.findOne({
      where: { cpf },
      attributes: ['cpf'],
    });
    return user ? user.cpf : null;
  },

  /**
   * @param {string} opaqueId
   * @returns {Promise<string|null>}
   */
  async findAccountBalance(opaqueId) {
    const user = await UserModel.findOne({
      where: { opaqueId },
      attributes: ['balance'],
    });
    return user ? user.balance : null;
  },

  /**
   * @param {string} opaqueId
   * @returns {Promise<FindAccountDetailsReturn|null>}
   */
  async findAccountDetails(opaqueId) {
    const user = await UserModel.findOne({
      where: { opaqueId },
      attributes: ['fullName', 'birth', 'cpf', 'email', 'createdAt'],
    });

    if (user) {
      return {
        cpf: user.cpf,
        fullName: user.fullName,
        birth: user.birth,
        email: user.email,
        registration: user.createdAt,
      };
    }
    return null;
  },
};
