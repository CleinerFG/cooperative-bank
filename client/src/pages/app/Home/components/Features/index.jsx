import Card from './Card';

import {
  FilePlus,
  PiggyBank,
  FileClock,
  History,
  FileSearch,
  FileChartPie,
  ChartSpline,
} from 'lucide-react';
import styles from './styles.module.scss';

const featuresMap = [
  {
    name: 'loans',
    items: [
      {
        label: 'new',
        navigateTo: '/app/loans/new-request',
        Icon: FilePlus,
      },
      {
        label: 'active',
        navigateTo: '/app/loans/active',
        Icon: PiggyBank,
      },
      {
        label: 'pending',
        navigateTo: '/app/loans/requests',
        Icon: FileClock,
      },

      {
        label: 'history',
        navigateTo: '/app/loans/history',
        Icon: History,
      },
    ],
  },
  {
    name: 'investments',
    items: [
      {
        label: 'search',
        navigateTo: '/app/investments/search',
        Icon: FileSearch,
      },
      {
        label: 'active',
        navigateTo: '/app/loans/active',
        Icon: FileChartPie,
      },
      {
        label: 'history',
        navigateTo: '/app/loans/history',
        Icon: ChartSpline,
      },
    ],
  },
];

function Features() {
  return (
    <div className={styles.container}>
      {featuresMap.map(({ name, items }) => (
        <Card featureName={name} items={items} key={name} />
      ))}
    </div>
  );
}

export default Features;
