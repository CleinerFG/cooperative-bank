import { useTranslation } from 'react-i18next';
import ExpandableCard from '@/components/cards/ExpandableCard';
import {
  StyledCardFooter,
  StyledCardLink,
  StyledCardText,
} from '@/components/cards/StyledBaseCard';
import VisibleContent from './VisibileContent';

function InvestmentGoal() {
  const { t } = useTranslation();

  return (
    <ExpandableCard VisibleComponent={<VisibleContent />}>
      <StyledCardFooter>
        <StyledCardText>{t('investGoalTxt1')}</StyledCardText>
        <StyledCardText>{t('investGoalTxt2')}</StyledCardText>
        <StyledCardLink>{t('adjustGoal')}</StyledCardLink>
      </StyledCardFooter>
    </ExpandableCard>
  );
}

export default InvestmentGoal;
