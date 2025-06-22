import { useTranslation } from 'react-i18next';
import StyledText from '@/components/ui/StyledText';

function Description({ texts }) {
  const { t } = useTranslation();
  return texts.map((txt, i) => <StyledText key={i}>{t(txt)}</StyledText>);
}

export default Description;
