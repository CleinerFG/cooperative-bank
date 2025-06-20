import { StyledFooter } from './InvestmentGoal.styles';
import ButtonLink from '@/components/ui/ButtonLink';

function Footer() {
  return (
    <StyledFooter>
      <ButtonLink
        label="adjustGoal"
        navigateTo="settings/account-preferences"
      />
    </StyledFooter>
  );
}

export default Footer;
