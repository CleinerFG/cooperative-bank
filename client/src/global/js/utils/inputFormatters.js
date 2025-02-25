import { numberToCurrency, numberToPercent } from './formatters.js';

/**
 * A function that validates an input value.
 * @callback InputFormatter
 * @param {Event} ev
 */

/**
 * @param {string} value
 * @returns {Number}
 */
function strictNumber(value) {
  return value.replace(/\D/g, '');
}

/**
 * @type {InputFormatter}
 */
export function currencyFormatter(ev) {
  let value = ev.target.value;
  value = strictNumber(value);
  value = numberToCurrency(value / 100);
  ev.target.value = value;
}

/**
 * @type {InputFormatter}
 */
export function percentFormatter(ev) {
  let value = ev.target.value;
  value = strictNumber(value);
  value = numberToPercent(value / 100);
  ev.target.value = value;

  const cursorPosition = ev.target.value.length - 1;
  ev.target.setSelectionRange(cursorPosition, cursorPosition);
}

/**
 * @type {InputFormatter}
 */
export function strictNumberFormatter(ev) {
  const value = ev.target.value.replace(/\D/g, '');
  ev.target.value = value;
}

/**
 * @type {InputFormatter}
 */
export function cpfFormatter(ev) {
  let value = ev.target.value;
  value = strictNumber(value);
  value = value.slice(0, 11);
  if (value.length === 11) {
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
  }
  ev.target.value = value;
}
