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

export function formatDate(date, locale = "pt-BR") {
  let dateObj;

  if (typeof date === "string") {
    dateObj = new Date(date);
  } else if (date instanceof Date) {
    dateObj = date;
  } else {
    return "InvalidData";
  }
  const utcDate = new Date(
    dateObj.getUTCFullYear(),
    dateObj.getUTCMonth(),
    dateObj.getUTCDate()
  );

  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(utcDate);
}
