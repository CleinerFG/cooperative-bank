import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import { StyledContainer, StyledLabelContainer } from './NavigationCard.styles';

function NavigationCard({ label, navigateTo, Icon }) {
  const { t } = useTranslation();
  return (
    <Link to={navigateTo}>
      <StyledContainer>
        <StyledLabelContainer>
          {Icon && <Icon />}
          <span>{t(label)}</span>
        </StyledLabelContainer>
        <ChevronRight />
      </StyledContainer>
    </Link>
  );
}

export default NavigationCard;
