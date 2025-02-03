/**
 * @constant {Intl.NumberFormat}
 */
export const numberToCurrency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
});

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
 * @constant {Intl.NumberFormat}
 */
export const numberToPercent = new Intl.NumberFormat('pt-BR', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

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
 * @constant {Intl.DateTimeFormat}
 */
export const formatDate = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

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

