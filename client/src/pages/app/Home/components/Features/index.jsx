import {
  Building2,
  CarFront,
  ChartSpline,
  CircleDollarSign,
  HandCoins,
  PiggyBank,
  UserRoundCheck,
} from 'lucide-react';
import Card from './Card';

const items = [
  {
    title: 'loans',
    description: 'loanFeatureDesc',
    navigateTo: '/app/loans',
    typesInfo: [
      { label: 'personal', Icon: <UserRoundCheck /> },
      { label: 'automotive', Icon: <CarFront /> },
      { label: 'realState', Icon: <Building2 /> },
    ],
    Icon: <HandCoins />,
  },
  {
    title: 'investments',
    description: 'investFeatureDesc',
    navigateTo: '/app/investments',
    typesInfo: [
      { label: 'fixedIncome', Icon: <PiggyBank /> },
      { label: 'variableIncome', Icon: <CircleDollarSign /> },
    ],
    Icon: <ChartSpline />,
  },
];

function Features() {
  return (
    <>
      {items.map((feat) => (
        <Card {...feat} key={feat.title} />
      ))}
    </>
  );
}

export default Features;
