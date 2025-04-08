const db = require('../databases/mysql/index');

class Repository {
  constructor(modelName) {
    this.Model = db[modelName];
  }

  // static plainRecord(model) {
  //   return model ? model.get({ plain: true }) : null;
  // }

  // static plainRecords(models) {
  //   if (models.length)
  //     return models.map((model) => Repository.plainRecord(model));
  //   return [];
  // }

  async create(data) {
    return await this.Model.create(data);
  }

  async findAll() {
    return await this.Model.findAll();
  }

  async updateById(data, id) {
    const [affectedRows, updatedRows] = await this.Model.update(data, {
      where: { id },
    });
    // initial test
    return { affectedRows, updatedRows };
  }

  async deleteById(data, id) {
    return await this.Model.delete({ where: { id } });
  }
}

module.exports = Repository;
