import { useTranslation } from 'react-i18next';
import { StyledCardText } from '@/components/cards/StyledBaseCard';

function Description({ texts }) {
  const { t } = useTranslation();
  return texts.map((txt, i) => (
    <StyledCardText key={i}>{t(txt)}</StyledCardText>
  ));
}

export default Description;
