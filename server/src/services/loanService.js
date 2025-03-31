const loanRepository = require('../repositories/loanRepository');
const {
  createLoanValidation,
} = require('../lib/helpers/loan/serviceValidators');
const {
  clientErrorsHandler,
  serverErrorHandler,
} = require('../lib/handlers/errorsHandler');

module.exports = {
  async create({
    debtorUserId,
    creditorUserId,
    value,
    monthRate,
    installmentsQty,
  }) {
    try {
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
    } catch (e) {
      return serverErrorHandler(e);
    }
  },
};
