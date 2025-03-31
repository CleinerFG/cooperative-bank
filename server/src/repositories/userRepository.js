const UserModel = require('../models/UserModel');

module.exports = {
  async create({ fullName, cpf, birth, email, password }) {
    return await UserModel.create({
      fullName,
      cpf,
      birth,
      email,
      password,
      balance: 100000,
    });
  },

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

  async findByCpf(cpf) {
    const user = await UserModel.findOne({
      where: { cpf },
      attributes: ['fullName', 'cpf'],
    });

    if (user) {
      return {
        fullName: user.fullName,
        cpf: user.cpf,
      };
    }
    return null;
  },

  async findEmail(email) {
    const user = await UserModel.findOne({
      where: { email },
      attributes: ['email'],
    });
    return user ? user.email : null;
  },

  async findCpf(cpf) {
    const user = await UserModel.findOne({
      where: { cpf },
      attributes: ['cpf'],
    });
    return user ? user.cpf : null;
  },

  async findAccountBalance(opaqueId) {
    const user = await UserModel.findOne({
      where: { opaqueId },
      attributes: ['balance'],
    });
    return user ? user.balance : null;
  },

  async findAccountDetails(opaqueId) {
    const user = await UserModel.findOne({
      where: { opaqueId },
      attributes: ['fullName', 'birth', 'cpf', 'email', 'createdAt'],
    });

    if (user) {
      return {
        fullName: user.fullName,
        birth: user.birth,
        cpf: user.cpf,
        email: user.email,
        registration: user.createdAt,
      };
    }
    return null;
  },
};
