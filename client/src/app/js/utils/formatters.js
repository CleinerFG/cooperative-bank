/**
 * @constant {Intl.NumberFormat}
 */
export const numberToCurrency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

/**
 * @param {string} str
 * @returns {number}
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
 * @constant {Intl.NumberFormat}
 */
export const numberToPercent = new Intl.NumberFormat("pt-BR", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/**
 * @param {string} str
 * @returns {number}
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
 * @constant {Intl.DateTimeFormat}
 */
export const formatDate = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});
