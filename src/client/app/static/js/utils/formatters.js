/**
 * An instance of Intl.NumberFormat configured for Brazilian currency (BRL).
 * @constant {Intl.NumberFormat}
 */
export const numberToCurrency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

/**
 * Converts a currency string (formatted as R$) to a number.
 * @param {string} str - The currency string to convert (e.g., "R$ 1.234,56").
 * @returns {number} The numeric representation of the currency string.
 */
export function currencyToNumber(str) {
  const numStr = str
    .replace(/R\$/, "")
    .replace(/\./g, "")
    .replace(/,/, ".")
    .trim();
  return parseFloat(numStr);
}

/**
 * An instance of Intl.NumberFormat configured for percentage formatting.
 * @constant {Intl.NumberFormat}
 */
export const numberToPercent = new Intl.NumberFormat("pt-BR", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/**
 * Converts a percentage string to a number.
 * @param {string} str - The percentage string to convert (e.g., "12,34%").
 * @returns {number} The numeric representation of the percentage string.
 */
export function percentToNumber(str) {
  const numStr = str
    .replace(/%/, "")
    .replace(/\./g, "")
    .replace(/,/, ".")
    .trim();
  return parseFloat(numStr);
}

/**
 * An instance of Intl.DateTimeFormat configured for Brazilian date format (DD/MM/YYYY).
 * @constant {Intl.DateTimeFormat}
 */
export const formatDate = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});
