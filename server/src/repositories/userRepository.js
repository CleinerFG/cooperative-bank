const Repository = require('./Repository');

class UserRepository extends Repository {
  constructor() {
    super('User');
  }

  async findByEmail(email) {
    return this.Model.findOne({
      where: { email },
      attributes: ['opaqueId', 'password'],
    });
  }

  async findByCpf(cpf) {
    return this.Model.findOne({
      where: { cpf },
      attributes: ['cpf', 'fullName'],
    });
  }

  async findEmail(email) {
    return this.Model.findOne({
      where: { email },
      attributes: ['email'],
    });
  }

  async findCpf(cpf) {
    return this.Model.findOne({
      where: { cpf },
      attributes: ['cpf'],
    });
  }

  async findAccountBalance(opaqueId) {
    const user = await this.Model.findOne({
      where: { opaqueId },
      attributes: ['balance'],
    });
    return user.balance;
  }

  async findAccountDetails(opaqueId) {
    return this.Model.findOne({
      where: { opaqueId },
      attributes: ['fullName', 'birth', 'cpf', 'email', 'createdAt'],
    });
  }
}

const userRepository = new UserRepository();

module.exports = userRepository;
