const intlNumberToCurrency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
});

const intlNumberToPercent = new Intl.NumberFormat('pt-BR', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const intlFormatDate = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

/**
 * @param {number} value
 * @returns {string}
 */
export function numberToCurrency(value) {
  return intlNumberToCurrency.format(value);
}

/**
 * @param {string} value
 * @returns {number}
 */
export function currencyToNumber(value) {
  const numStr = value
    .replace(/R\$/, '')
    .replace(/\./g, '')
    .replace(/,/, '.')
    .trim();
  return parseFloat(numStr);
}

/**
 * @param {number} value
 * @returns {string}
 */
export function numberToPercent(value) {
  return intlNumberToPercent.format(value / 100);
}

/**
 * @param {string} value
 * @returns {number}
 */
export function percentToNumber(value) {
  const numStr = value
    .replace(/%/, '')
    .replace(/\./g, '')
    .replace(/,/, '.')
    .trim();
  return parseFloat(numStr);
}

/**
 * @param {string} value
 * @returns {string}
 */
export function formatDate(value) {
  return intlFormatDate.format(new Date(value));
}

/**
 * @param {string} value
 * @returns {string}
 */
export function formatCpf(value) {
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
}

/**
 * @param {string} value
 * @returns {string}
 */
export function cpfToString(value) {
  return value.replace(/[.-]/g, '');
}
