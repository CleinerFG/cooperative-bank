const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // associations here
    }
  }

  User.init(
    {
      opaqueId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      fullName: {
        type: DataTypes.STRING(100),
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
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      operationPassword: {
        type: DataTypes.STRING(60),
      },
      balance: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
    }
  );
  return User;
};
