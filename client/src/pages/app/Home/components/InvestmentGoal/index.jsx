import { useTranslation } from 'react-i18next';
import ProgressBar from '@/components/ProgressBar';
import { StyledHeader, StyledTitle } from '../Card.styles';
import { StyledContainer } from './InvestmentGoal.styles';
import { Goal } from 'lucide-react';

function InvestmentGoal() {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>{t('investGoal')}</StyledTitle>
        <Goal />
      </StyledHeader>
      <ProgressBar current={2345.45} total={5000} formatCurrency />
    </StyledContainer>
  );
}

export default InvestmentGoal;
