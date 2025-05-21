import Feature from './Feature';
import { StyledContainer } from './Features.styles';
import {
  FilePlus,
  PiggyBank,
  FileClock,
  History,
  FileSearch,
  FileChartPie,
  ChartSpline,
} from 'lucide-react';
import MyCards from './MyCards';

const featuresMap = [
  {
    name: 'loans',
    links: [
      {
        label: 'new',
        navigateTo: '/app/loans/new-request',
        Icon: <FilePlus />,
      },
      {
        label: 'active',
        navigateTo: '/app/loans/active',
        Icon: <PiggyBank />,
      },
      {
        label: 'pending',
        navigateTo: '/app/loans/requests',
        Icon: <FileClock />,
      },

      {
        label: 'history',
        navigateTo: '/app/loans/history',
        Icon: <History />,
      },
    ],
  },
  {
    name: 'investments',
    links: [
      {
        label: 'search',
        navigateTo: '/app/investments/search',
        Icon: <FileSearch />,
      },
      {
        label: 'active',
        navigateTo: '/app/loans/active',
        Icon: <FileChartPie />,
      },
      {
        label: 'history',
        navigateTo: '/app/loans/history',
        Icon: <ChartSpline />,
      },
    ],
  },
];

function Features() {
  return (
    <StyledContainer>
      <MyCards />
      {featuresMap.map((feat) => (
        <Feature {...feat} key={feat.name} />
      ))}
    </StyledContainer>
  );
}

export default Features;
