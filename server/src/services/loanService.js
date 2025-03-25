const loanRepository = require('../repositories/loanRepository');
// const { loanCategoryValidator } = require('../lib/helpers/loanValidators');

module.exports = {
  async create({ debtorId, creditorId, value, monthRate, installmentsQty }) {
    await loanRepository.create({
      debtorId,
      creditorId,
      value,
      monthRate,
      installmentsQty,
    });
  },
};
