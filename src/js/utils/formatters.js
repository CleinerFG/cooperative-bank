function monetaryValue(value) {
  let [integerPart, decimalPart] = value.toFixed(2).split(".");
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `R$ ${integerPart},${decimalPart}`;
}
