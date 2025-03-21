const { Op } = require('sequelize');
const Model = require('../models/UserModel');

module.exports = {
  async create({ fullName, cpf, birth, email, password }) {
    return await Model.create({ fullName, cpf, birth, email, password });
  },

  async findByEmail(email) {
    const user = await Model.findOne({
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
    const user = await Model.findOne({
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
    const user = await Model.findOne({
      where: { email },
      attributes: ['email'],
    });
    return user ? user.email : null;
  },

  async findCpf(cpf) {
    const user = await Model.findOne({
      where: { cpf },
      attributes: ['cpf'],
    });
    return user ? user.cpf : null;
  },

  async findBalanceById(id) {
    const user = await Model.findByPk(id, {
      attributes: ['balance'],
      where: { id },
    });
    return user ? user.balance : null;
  },

  async findDetailsById(id) {
    const user = await Model.findByPk(id, {
      attributes: ['fullName', 'birth', 'cpf', 'email', 'created_at'],
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
