const db = require('../databases/mysql/index');

class Repository {
  constructor(modelName) {
    this.Model = db[modelName];
  }

  async create(data) {
    return await this.Model.create(data);
  }

  async findAll() {
    return await this.Model.findAll();
  }

  async updateById(data, id) {
    return await this.Model.update(data, { where: { id } });
  }

  async deleteById(data, id) {
    return await this.Model.delete({ where: { id } });
  }
}

module.exports = Repository;
