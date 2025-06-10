import { useTranslation } from 'react-i18next';
import { StyledTitle } from './Title.styles';
import { usePageLayoutState } from '@/hooks/pageLayout';

function Title() {
  const { t } = useTranslation();
  const { title, isRootRoute } = usePageLayoutState();
  return <StyledTitle $strong={isRootRoute}>{t(title)}</StyledTitle>;
}

export default Title;
