const calculateValue = (creditValue, installmentsQty, monthRate) => {
  const rate = monthRate / 100;
  return creditValue * (rate / (1 - Math.pow(1 + rate, -installmentsQty)));
};

module.exports = (loan) => {
  const installments = [];
  const value = calculateValue(
    loan.value,
    loan.installmentsQty,
    loan.monthRate
  );
  for (let i = 0; i < loan.installments_qty; i++) {
    const installment = {};
  }
};
