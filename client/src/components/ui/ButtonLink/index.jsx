import { StyledLink } from './ButtonLink.styles';
import { useTranslation } from 'react-i18next';

function ButtonLink({ label, navigateTo }) {
  const { t } = useTranslation();
  return <StyledLink to={navigateTo}>{t(label)}</StyledLink>;
}

export default ButtonLink;
