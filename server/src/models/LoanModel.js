const { DataTypes, INTEGER } = require('sequelize');
const { sequelize } = require('../config/databases/mysql/index');

const LoanModel = sequelize.define(
  'Loan',
  {
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
    status_id: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: 'loans',
    validate: {
      checkSameDebtorCreditor() {
        if (this.debtorUserId === this.creditorUserId) {
          throw new Error(
            'Debtor user ID cannot be the same as creditor user ID.'
          );
        }
      },
    },
  }
);

LoanModel.associate = (models) => {
  LoanModel.belongsTo(models.User, {
    foreignKey: 'debtorUserId',
    as: 'debtor',
  });
  LoanModel.belongsTo(models.User, {
    foreignKey: 'creditorUserId',
    as: 'creditor',
  });
};

module.exports = LoanModel;
