import {
  Building2,
  CarFront,
  ChartSpline,
  CircleDollarSign,
  HandCoins,
  PiggyBank,
  UserRoundCheck,
} from 'lucide-react';
import Feature from './Feature';

const items = [
  {
    title: 'loans',
    texts: ['loanFeatTxt1', 'loanFeatTxt2'],
    navigateTo: '/app/loans',
    tags: [
      { label: 'personal', Icon: <UserRoundCheck /> },
      { label: 'automotive', Icon: <CarFront /> },
      { label: 'realState', Icon: <Building2 /> },
    ],
    Icon: <HandCoins />,
  },
  {
    title: 'investments',
    texts: ['investFeatTxt1', 'investFeatTxt2'],
    navigateTo: '/app/investments',
    tags: [
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
        <Feature {...feat} key={feat.title} />
      ))}
    </>
  );
}

export default Features;
