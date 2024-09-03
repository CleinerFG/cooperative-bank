// "javascript" - type string -> "Javascript" - type string
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// "R$ 4.854,98" - type string -> 4854.98 - type Number
export function monetaryValueToNumber(str) {
  const numberStr = str
    .replace(/[R$\s]/g, "")
    .replace(/\./g, "")
    .replace(",", ".");
  return Number(numberStr);
}
