export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function monetaryValueToNumber(str) {
  const numberStr = str
    .replace(/[R$\s]/g, "")
    .replace(/\./g, "")
    .replace(",", ".");
  return Number(numberStr);
}
