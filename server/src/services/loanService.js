const loanRepository = require('../repositories/loanRepository');
const {
  createLoanValidation,
} = require('../lib/helpers/loan/serviceValidators');
const { clientErrorsHandler } = require('../lib/handlers/errorsHandler');

module.exports = {
  async create({
    debtorUserId,
    creditorUserId,
    value,
    monthRate,
    installmentsQty,
  }) {
    const [isValid, fields] = createLoanValidation({
      debtorUserId,
      creditorUserId,
      value,
      monthRate,
      installmentsQty,
    });

    if (!isValid) return clientErrorsHandler(fields);

    await loanRepository.create({
      debtorUserId,
      creditorUserId,
      value,
      monthRate,
      installmentsQty,
    });
    return { success: true };
  },
};
