/**
 * Uses the formula:
 * `creditValue * (rate / (1 - (1 + rate) ^ -installments))`.
 *
 * @type {string}
 */
export default function calculateInstallmentValue(
  creditValue,
  installments,
  interestRate
) {
  const rate = interestRate / 100;
  return creditValue * (rate / (1 - Math.pow(1 + rate, -installments)));
}
