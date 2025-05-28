import { useTranslation } from 'react-i18next';
import {
  StyledLink,
  StyledText,
} from '@/components/cards/BaseCard/BaseCard.styles';
import { StyledFooter } from './InvestmentGoal.styles';

function Footer() {
  const { t } = useTranslation();
  return (
    <StyledFooter>
      <StyledText>{t('investGoalTxt1')}</StyledText>
      <StyledText>{t('investGoalTxt2')}</StyledText>
      <StyledLink>{t('adjustGoal')}</StyledLink>
    </StyledFooter>
  );
}

export default Footer;
