/**
 * Capitalizes the first letter of a string while keeping the rest of the string unchanged.
 *
 * @param {string} str - The string to capitalize.
 * @returns {string} The string with the first letter capitalized.
 *
 * @example
 * capitalize('javascript'); // returns 'Javascript'
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a monetary value represented as a string into a number.
 * The function removes the currency symbol, spaces, dots, and replaces the comma
 * with a dot for decimal separation, then returns the resulting number.
 *
 * @param {string} str - The monetary value as a string.
 * @returns {number} The monetary value converted to a number.
 *
 * @example
 * monetaryValueToNumber('R$ 4.854,98'); // returns 4854.98
 */
export function monetaryValueToNumber(str) {
  const numberStr = str
    .replace(/[R$\s]/g, '') // Removes the 'R$', spaces
    .replace(/\./g, '') // Removes dots (used as thousand separators)
    .replace(',', '.'); // Replaces the comma with a dot for decimal separation
  return Number(numberStr); // Converts the string to a number
}
