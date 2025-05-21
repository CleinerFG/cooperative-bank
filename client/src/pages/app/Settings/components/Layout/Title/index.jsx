import { useTranslation } from 'react-i18next';
import { StyledTitle, StyledTitleContainer } from './Title.styles';

function Title({ text, isRootRoute, Icon }) {
  const { t } = useTranslation();
  return (
    <StyledTitleContainer>
      {Icon}
      <StyledTitle $strong={isRootRoute}>{t(text)}</StyledTitle>
    </StyledTitleContainer>
  );
}

export default Title;
