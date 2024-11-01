import { numberToCurrency, numberToPercent } from "./formatters.js";

/**
 * A function that validates an input value.
 * @callback InputFormatter
 * @param {Event} ev - The input event triggered by the user.
 */

/**
 * Formats the input value as currency.
 * @type {InputFormatter}
 */
export function currencyFormatter(ev) {
  let value = ev.target.value;
  value = numberToCurrency.format(value / 100);
  ev.target.value = value;
}

/**
 * Formats the input value as a percentage.
 * Additionally, it adjusts the cursor position to the end of the formatted value.
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
 * Restricts the input to only numeric values.
 * Non-numeric characters are removed from the input.
 * @type {InputFormatter}
 */
export function strictNumberFormatter(ev) {
  const value = ev.target.value.replace(/\D/g, "");
  ev.target.value = value;
}
