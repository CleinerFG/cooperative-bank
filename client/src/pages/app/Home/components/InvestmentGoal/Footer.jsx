import { useTranslation } from 'react-i18next';
import {
  StyledLink,
} from '@/components/cards/BaseCard/BaseCard.styles';
import { StyledFooter } from './InvestmentGoal.styles';

function Footer() {
  const { t } = useTranslation();
  return (
    <StyledFooter>
      <StyledLink>{t('adjustGoal')}</StyledLink>
    </StyledFooter>
  );
}

export default Footer;
