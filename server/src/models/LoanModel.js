const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/databases/mysql/index');
const UserModel = require('./UserModel');

const LoanModel = sequelize.define(
  'Loan',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    opaqueId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
    },
    debtorUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    creditorUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    contractDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    value: {
      type: DataTypes.DECIMAL(11, 2),
      allowNull: false,
    },
    monthRate: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: false,
    },
    installmentsQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(
        'pending',
        'active',
        'finished',
        'canceled',
        'rejected'
      ),
      allowNull: false,
      defaultValue: 'pending',
    },
  },
  {
    tableName: 'loans',
    validate: {
      checkDebtorCreditor() {
        if (this.debtorUserId === this.creditorUserId) {
          throw new Error(
            'Debtor user ID cannot be the same as creditor user ID.'
          );
        }
      },
    },
  }
);

LoanModel.belongsTo(UserModel, {
  foreignKey: 'debtorUserId',
  as: 'debtor',
});
LoanModel.belongsTo(UserModel, {
  foreignKey: 'creditorUserId',
  as: 'creditor',
});

module.exports = LoanModel;
