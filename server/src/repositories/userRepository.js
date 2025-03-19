const { Op } = require('sequelize');
const Model = require('../models/UserModel');

module.exports = {
  async create({ fullName, cpf, birth, email, password }) {
    return await Model.create({ fullName, cpf, birth, email, password });
  },

  async findByCpf(cpf) {
    const user = await Model.findOne({
      where: { cpf },
      attributes: ['fullName', 'cpf'],
    });
    return user;
  },

  async findEmail({ email }) {
    return await Model.findOne({ where: { email }, attributes: ['email'] });
  },

  async findCpf({ cpf }) {
    return await Model.findOne({ where: { cpf }, attributes: ['cpf'] });
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
      attributes: [
        'fullName',
        'birth',
        'cpf',
        'email',
        ['created_at', 'registration'],
      ],
    });
    return user;
  },
};
