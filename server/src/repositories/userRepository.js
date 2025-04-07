const Repository = require('./Repository');

class UserRepository extends Repository {
  constructor() {
    super('User');
  }

  async findByEmail(email) {
    const user = await this.Model.findOne({
      where: { email },
      attributes: ['opaqueId', 'password'],
    });

    return user;
  }

  async findByCpf(cpf) {
    const user = await this.Model.findOne({
      where: { cpf },
      attributes: ['cpf', 'fullName'],
    });

    return user;
  }

  async findEmail(email) {
    const user = await this.Model.findOne({
      where: { email },
      attributes: ['email'],
    });
    return user;
  }

  async findCpf(cpf) {
    const user = await this.Model.findOne({
      where: { cpf },
      attributes: ['cpf'],
    });
    return user;
  }

  async findAccountBalance(opaqueId) {
    const user = await this.Model.findOne({
      where: { opaqueId },
      attributes: ['balance'],
    });
    return user;
  }

  async findAccountDetails(opaqueId) {
    const user = await this.Model.findOne({
      where: { opaqueId },
      attributes: ['fullName', 'birth', 'cpf', 'email', 'createdAt'],
    });

    return user;
  }
}

const userRepository = new UserRepository();

module.exports = userRepository;
