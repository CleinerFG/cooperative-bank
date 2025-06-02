import { formatCpf, numberToCurrency } from '@/utils/formatters';

const onlyNumbers = (value) => value.replace(/\D/g, '');

const formatters = {
  currency: (inputValue) => {
    let numeric = onlyNumbers(inputValue);
    const cleanValue = parseFloat(numeric / 100);

    const formattedValue = numberToCurrency(cleanValue);

    return { cleanValue, formattedValue };
  },
  cpf: (inputValue) => {
    const cleanValue = onlyNumbers(inputValue).slice(0, 11);

    let formattedValue = cleanValue;

    if (cleanValue.length === 11) {
      formattedValue = formatCpf(cleanValue);
    }

    return { cleanValue, formattedValue };
  },
};

function valueFormatter(inputValue, type) {
  return formatters[type](inputValue);
}

export default valueFormatter;
