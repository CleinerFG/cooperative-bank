import { useTranslation } from 'react-i18next';
import { StyledContainer, StyledTitle } from './Title.styles';
import { usePageLayoutState } from '@/hooks/pageLayout';
import PrevButton from './PrevButton';

function Title() {
  const { t } = useTranslation();
  const { title, isRootRoute } = usePageLayoutState();
  return (
    <StyledContainer>
      <PrevButton />
      <StyledTitle $strong={isRootRoute}>{t(title)}</StyledTitle>
    </StyledContainer>
  );
}

export default Title;
