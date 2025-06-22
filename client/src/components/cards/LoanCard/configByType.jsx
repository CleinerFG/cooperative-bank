import { formatDate, numberToCurrency } from '@/utils/formatters';
import { BanknoteArrowUp, Calendar, DollarSign } from 'lucide-react';

const configByType = {
  active: (t, data) => ({
    headerContent: null,
    mainItems: [
      { label: 'value', value: numberToCurrency(data.value), Icon: DollarSign },
      {
        label: 'amountPaid',
        value: numberToCurrency(data.amountPaid),
        Icon: BanknoteArrowUp,
      },
    ],
  }),
  request: (t, data) => ({
    headerContent: null,
    mainItems: [
      { label: 'value', value: numberToCurrency(data.value), Icon: DollarSign },
      {
        label: 'term',
        value: t('months', { value: data.term }),
        Icon: Calendar,
      },
    ],
  }),
  history: (t, data) => ({
    headerContent: <span>{data.status}</span>,
    mainItems: [
      { label: 'value', value: numberToCurrency(data.value), Icon: DollarSign },
      {
        label: 'endDate',
        value: formatDate(data.endDate),
        Icon: Calendar,
      },
    ],
  }),
};

export default configByType;
