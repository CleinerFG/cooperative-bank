/**
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * @param {string} str
 * @returns {number}
 */
export function monetaryValueToNumber(str) {
  const numberStr = str
    .replace(/[R$\s]/g, '')
    .replace(/\./g, '')
    .replace(',', '.');
  return Number(numberStr);
}
