const { DataTypes } = require('sequelize');
const { sequelize } = require('../databases/index');

// const UserModel = sequelize.define(
//   'User',
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     opaqueId: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       unique: true,
//     },
//     fullName: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//     },
//     cpf: {
//       type: DataTypes.STRING(11),
//       unique: true,
//       allowNull: false,
//     },
//     birth: {
//       type: DataTypes.DATEONLY,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//       unique: true,
//     },
//     password: {
//       type: DataTypes.STRING(60),
//       allowNull: false,
//     },
//     operationPassword: {
//       type: DataTypes.STRING(60),
//     },
//     balance: {
//       type: DataTypes.DECIMAL(14, 2),
//       allowNull: false,
//       defaultValue: 0,
//     },
//   },
//   {
//     tableName: 'users',
//   }
// );

// UserModel.associate = (models) => {
//   UserModel.hasMany(models.Loan, {
//     foreignKey: 'debtorUserId',
//     as: 'debtorLoans',
//   });
//   UserModel.hasMany(models.Loan, {
//     foreignKey: 'creditorUserId',
//     as: 'creditorLoans',
//   });
// };

const UserModel = null;

module.exports = UserModel;
