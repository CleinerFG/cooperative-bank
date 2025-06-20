import { numberToCurrency, numberToPercent } from '@/utils/formatters';

export function maskedValue(type, value) {
  if (type === 'percent') return numberToPercent(value);
  if (type === 'currency') return numberToCurrency(value);
  return value;
}
