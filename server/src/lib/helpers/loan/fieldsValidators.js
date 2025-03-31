const checkSameDebtorCreditor = ({ debtorUserId, creditorUserId }) => {
  const fields = [
    {
      name: 'debtorUserId',
      isValid: false,
      error: 'sameDebtorCreditorId',
    },
    {
      name: 'creditorUserId',
      isValid: false,
      error: 'sameDebtorCreditorId',
    },
  ];
  if (debtorUserId !== creditorUserId) {
    fields[0].isValid = true;
    fields[1].isValid = true;
  }

  return fields;
};

module.exports = {
  checkSameDebtorCreditor,
};
