/**
 * @callback StringHandler
 * @param {string} value
 * @returns {string}
 */

/**
 * @type {StringHandler}
 */
export function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * @type {StringHandler}
 */
export function titleCase(value) {
  const words = value.split(' ');
  return words.map((word) => capitalize(word)).join(' ');
}

/**
 * @type {StringHandler}
 */
export function normalizeKebabCase(value) {
  return value.replace('-', ' ');
}

/**
 * @type {StringHandler}
 */
export function toCamelCase(value) {
  const splited = value.split(' ');
  return splited
    .map((word, index) => {
      if (index === 0) return word.toLowerCase();
      return capitalize(word);
    })
    .join('');
}

/**
 * @type {StringHandler}
 */
export function monetaryValueToNumber(value) {
  const numberStr = value
    .replace(/[R$\s]/g, '')
    .replace(/\./g, '')
    .replace(',', '.');
  return Number(numberStr);
}
