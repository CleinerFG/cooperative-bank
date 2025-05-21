import { useTranslation } from 'react-i18next';
import { StyledTitle } from './Title.styles';

function Title({ text, strong }) {
  const { t } = useTranslation();
  return <StyledTitle $strong={strong}>{t(text)}</StyledTitle>;
}

export default Title;
