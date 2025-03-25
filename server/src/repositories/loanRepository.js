const LoanModel = require('../models/LoanModel');

module.exports = {
  async create({ debtorId, creditorId, value, monthRate, installmentsQty }) {
    await LoanModel.crete({
      debtorId,
      creditorId,
      value,
      monthRate,
      installmentsQty,
    });
  },
};
