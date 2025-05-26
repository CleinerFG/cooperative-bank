import { useTranslation } from 'react-i18next';
import { StyledDescription } from './CardDescription.styles';

function CardDescription({ text }) {
  const { t } = useTranslation();
  return <StyledDescription>{t(text)}</StyledDescription>;
}

export default CardDescription;
