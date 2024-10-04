export function numberToCurrency(num) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(num);
}

export function currencyToNumber(str) {
  const numStr = str
    .replace(/R\$/, "")
    .replace(/\./g, "")
    .replace(/,/, ".")
    .trim();
  return parseFloat(numStr);
}

export function numberToPercent(num) {
  return new Intl.NumberFormat("pt-BR", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num / 100);
}

export function percentToNumber(str) {
  const numStr = str
    .replace(/%/, "")
    .replace(/\./g, "")
    .replace(/,/, ".")
    .trim();
  return parseFloat(numStr);
}
