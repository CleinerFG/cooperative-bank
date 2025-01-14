import { numberToCurrency, numberToPercent } from "./formatters.js";

/**
 * A function that validates an input value.
 * @callback InputFormatter
 * @param {Event} ev
 */

/**
 * @type {InputFormatter}
 */
export function currencyFormatter(ev) {
  let value = ev.target.value;
  value = numberToCurrency.format(value / 100);
  ev.target.value = value;
}

/**
 * @type {InputFormatter}
 */
export function percentFormatter(ev) {
  let value = ev.target.value;
  value = numberToPercent.format(value / 10000);
  ev.target.value = value;

  const cursorPosition = ev.target.value.length - 1;
  ev.target.setSelectionRange(cursorPosition, cursorPosition);
}

/**
 * @type {InputFormatter}
 */
export function strictNumberFormatter(ev) {
  const value = ev.target.value.replace(/\D/g, "");
  ev.target.value = value;
}
