const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysqlConfig');

const userModel = (module.exports = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    opaqueId: {
      type: DataTypes.STRING(36),
      unique: true,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING(11),
      unique: true,
      allowNull: false,
    },
    birth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    operationPassword: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: null,
    },
    balance: {
      type: DataTypes.DECIMAL(14, 2),
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: 'users',
  }
));

module.exports = userModel;
