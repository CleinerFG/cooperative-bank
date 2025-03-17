const model = require('../models/UserModel');

module.exports = {
  async findByCpf(cpf) {
    const user = await model.findOne({
      where: { cpf },
      attributes: ['fullName', 'cpf'],
    });
    return user.toJSON() || null;
  },

  async findBalanceById(id) {
    const user = await model.findByPk(id, {
      attributes: ['balance'],
      where: { id },
    });
    return user ? user.balance : null;
  },

  async findDetailsById(id) {
    const user = await model.findByPk(id, {
      attributes: [
        'fullName',
        'birth',
        'cpf',
        'email',
        ['created_at', 'registration'],
      ],
    });
    return user.toJSON() || null;
  },
};
