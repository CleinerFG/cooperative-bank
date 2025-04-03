const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require(path.resolve(__dirname, '../../config/databases/mysql'));

const modelsPath = path.resolve(__dirname, '../../models/mysql');
const db = {};
const sequelize = new Sequelize(config);

const loadModels = () => {
  fs.readdirSync(modelsPath)
    .filter(
      (file) =>
        file.startsWith('.') === false &&
        file.endsWith('.js') &&
        !file.includes('.test.js')
    )
    .forEach((file) => {
      const modelFilePath = path.join(modelsPath, file);
      const model = require(modelFilePath)(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    });
};

const associateModels = () => {
  Object.values(db).forEach((model) => {
    if (model.associate) {
      model.associate(db);
    }
  });
};

loadModels();
associateModels();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
