import { useTranslation } from 'react-i18next';
import { ShieldCheck, TrendingUp } from 'lucide-react';
import {
  StyledContainer,
  StyledItem,
  StyledLabel,
  StyledDot,
} from './Status.styles';

function StatusItems() {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledItem>
        <ShieldCheck />
        <StyledLabel>{t('verified')}</StyledLabel>
      </StyledItem>
      <StyledItem>
        <TrendingUp />
        <StyledLabel>Score</StyledLabel>
        <StyledLabel>910</StyledLabel>
      </StyledItem>
      <StyledItem>
        <StyledDot />
        <StyledLabel>{t('statusActive')}</StyledLabel>
      </StyledItem>
    </StyledContainer>
  );
}

export default StatusItems;
