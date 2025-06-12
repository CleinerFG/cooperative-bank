import { useTranslation } from 'react-i18next';
import { StyledLink } from './SeeDetails.styles';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function SeeDetailsLink({ navigateTo }) {
  const { t } = useTranslation();
  return (
    <StyledLink to={navigateTo}>
      {' '}
      {t('seeDetails')}
      <ChevronRight />
    </StyledLink>
  );
}

export default SeeDetailsLink;
