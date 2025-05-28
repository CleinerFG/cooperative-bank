import { useTranslation } from 'react-i18next';
import {
  StyledCardHeader,
  StyledCardTitle,
} from '@/components/cards/StyledBaseCard';
import MetricItem from './MetricItem';
import { StyledContainer, StyledContent } from './MonthlySummary.styles';
import { ChartNoAxesCombined } from 'lucide-react';

const metrics = [
  { type: 'inflow', value: 24353 },
  { type: 'outflow', value: 5353 },
];

function MonthlySummary() {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledCardHeader>
        <StyledCardTitle>{t('monthlySummary')}</StyledCardTitle>
        <ChartNoAxesCombined />
      </StyledCardHeader>
      <StyledContent>
        {metrics.map((item) => (
          <MetricItem {...item} key={item.type} />
        ))}
      </StyledContent>
    </StyledContainer>
  );
}

export default MonthlySummary;
