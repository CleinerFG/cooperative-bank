import { useTranslation } from 'react-i18next';
import { StyledButton, StyledIcon, StyledLabel } from './SeeMoreButton.styles';

function SeeMoreButton({ isExpanded, handleClick }) {
  const { t } = useTranslation();
  return (
    <StyledButton onClick={handleClick}>
      <StyledLabel>{t('seeMore')}</StyledLabel>
      <StyledIcon $rotate={isExpanded ? 180 : 0} />
    </StyledButton>
  );
}

export default SeeMoreButton;
