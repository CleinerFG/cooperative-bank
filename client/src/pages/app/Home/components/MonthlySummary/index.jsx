import { useTranslation } from 'react-i18next';
import MetricItem from './MetricItem';
import { StyledHeader, StyledTitle } from '../Card.styles';
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
      <StyledHeader>
        <StyledTitle>{t('monthlySummary')}</StyledTitle>
        <ChartNoAxesCombined />
      </StyledHeader>
      <StyledContent>
        {metrics.map((item) => (
          <MetricItem {...item} key={item.type} />
        ))}
      </StyledContent>
    </StyledContainer>
  );
}

export default MonthlySummary;
