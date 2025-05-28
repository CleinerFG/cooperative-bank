import { useTranslation } from 'react-i18next';
import {
  StyledLink,
  StyledIconContainer,
  StyledLabel,
} from './ActionLink.styles';

function ActionLink({ label, navigateTo, Icon, rounded = false }) {
  const { t } = useTranslation();

  return (
    <StyledLink to={navigateTo}>
      <StyledIconContainer $rounded={rounded}>
        {Icon && <Icon />}
      </StyledIconContainer>
      <StyledLabel>{t(label)}</StyledLabel>
    </StyledLink>
  );
}

export default ActionLink;
