import { useTranslation } from 'react-i18next';
import MetricItem from './MetricItem';
import {
  StyledContainer,
  StyledContent,
  StyledTitle,
} from './MonthlySummary.styles';

const metrics = [
  { type: 'inflow', value: 24353 },
  { type: 'outflow', value: 5353 },
];

function MonthlySummary() {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledTitle>{t('monthlySummary')}</StyledTitle>
      <StyledContent>
        {metrics.map((item) => (
          <MetricItem {...item} key={item.type} />
        ))}
      </StyledContent>
    </StyledContainer>
  );
}

export default MonthlySummary;
