const { checkSameDebtorCreditor } = require('./fieldsValidators');
const reduceValidationFields = require('../reduceValidationFields');

module.exports = {
  createLoanValidation: ({ debtorUserId, creditorUserId }) => {
    const validations = [
      checkSameDebtorCreditor({ debtorUserId, creditorUserId }),
    ];
    return reduceValidationFields(validations);
  },
};
