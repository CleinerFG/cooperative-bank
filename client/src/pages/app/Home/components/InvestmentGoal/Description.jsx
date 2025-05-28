import { useTranslation } from 'react-i18next';
import {
  StyledMain,
  StyledText,
} from '@/components/cards/BaseCard/BaseCard.styles';

function Description() {
  const { t } = useTranslation();
  return (
    <StyledMain>
      <StyledText>{t('investGoalTxt1')}</StyledText>
      <StyledText>{t('investGoalTxt2')}</StyledText>
    </StyledMain>
  );
}

export default Description;
