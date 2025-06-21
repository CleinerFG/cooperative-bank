import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { StyledLink } from './SeeDetails.styles';
import { ChevronRight } from 'lucide-react';

function SeeDetailsLink({ dataId }) {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  return (
    <StyledLink to={pathname + '/details/' + dataId}>
      {t('seeDetails')}
      <ChevronRight />
    </StyledLink>
  );
}

export default SeeDetailsLink;
