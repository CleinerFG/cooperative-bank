const LoanModel = require('../models/LoanModel');

module.exports = {
  async create({
    debtorUserId,
    creditorUserId,
    value,
    monthRate,
    installmentsQty,
  }) {
    return await LoanModel.create({
      debtorUserId,
      creditorUserId,
      value,
      monthRate,
      installmentsQty,
      statusId: 1,
    });
  },
};
