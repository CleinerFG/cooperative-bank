import { useTranslation } from 'react-i18next';
import { StyledContainer, StyledLabel } from './Tag.styles';

function Tag({ label, value, Icon }) {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      {Icon && <Icon />} <StyledLabel>{t(label)}</StyledLabel>
      {value && <StyledLabel>{t(value)}</StyledLabel>}
    </StyledContainer>
  );
}

export default Tag;
