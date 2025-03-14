const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysqlConfig');

module.exports = sequelize.define(
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
  },
  {
    tableName: 'users',
  }
);
