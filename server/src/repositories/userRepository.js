const Model = require('../models/UserModel');

module.exports = {
  async findByCpf(cpf) {
    const user = await Model.findOne({
      where: { cpf },
      attributes: ['fullName', 'cpf'],
    });
    return user ? user.toJSON() : null;
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
    return user ? user.toJSON() : null;
  },
};
