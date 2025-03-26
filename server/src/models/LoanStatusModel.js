const { DataTypes } = require('sequelize');
const sequelize = require('../databases');

const LoanStatusModel = sequelize.define(
  'LoanStatus',
  {
    description: {
      unique: true,
      type: DataTypes.ENUM(
        'pending',
        'active',
        'finished',
        'canceled',
        'rejected'
      ),
      allowNull: false,
    },
  },
  {
    tableName: 'loan_statuses',
  }
);

LoanStatusModel.associate = (models) => {
  LoanStatusModel.hasMany(models.Loan, {
    foreignKey: 'statusId',
    as: 'loans',
  });
};

module.exports = LoanStatusModel;
