import { useTranslation } from 'react-i18next';
import { StyledButton, StyledIcon, StyledLabel } from './SeeMoreButton.styles';
import { useExpandedCardContext } from '..';

function SeeMoreButton() {
  const { t } = useTranslation();
  const { isExpanded } = useExpandedCardContext();
  
  return (
    <StyledButton>
      <StyledLabel>{t('seeMore')}</StyledLabel>
      <StyledIcon $rotate={isExpanded ? 180 : 0} />
    </StyledButton>
  );
}

export default SeeMoreButton;
