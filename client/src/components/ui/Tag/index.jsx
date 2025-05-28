import { useTranslation } from 'react-i18next';
import { StyledContainer, StyledLabel } from './Tag.styles';

function Tag({ label, Icon }) {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      {Icon} <StyledLabel>{t(label)}</StyledLabel>
    </StyledContainer>
  );
}

export default Tag;
