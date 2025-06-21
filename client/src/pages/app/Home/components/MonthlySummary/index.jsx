import BaseCard from '@/components/cards/BaseCard';
import MetricItem from './MetricItem';
import { StyledContent } from './MonthlySummary.styles';
import { ChartNoAxesCombined } from 'lucide-react';

const metrics = [
  { type: 'inflow', value: 24353 },
  { type: 'outflow', value: 5353 },
];

function MonthlySummary() {
  return (
    <BaseCard title="monthlySummary" Icon={ChartNoAxesCombined}>
      <StyledContent>
        {metrics.map((item) => (
          <MetricItem {...item} key={item.type} />
        ))}
      </StyledContent>
    </BaseCard>
  );
}

export default MonthlySummary;
