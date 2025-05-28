import { useTranslation } from 'react-i18next';
import ExpandableCard from '@/components/cards/ExpandableCard';
import {
  StyledCardLink,
  StyledCardText,
} from '@/components/cards/StyledBaseCard';
import VisibleContent from './VisibileContent';
import { StyledFooter } from './InvestmentGoal.styles';

function InvestmentGoal() {
  const { t } = useTranslation();

  return (
    <ExpandableCard VisibleComponent={<VisibleContent />}>
      <StyledFooter>
        <StyledCardText>{t('investGoalTxt1')}</StyledCardText>
        <StyledCardText>{t('investGoalTxt2')}</StyledCardText>
        <StyledCardLink>{t('adjustGoal')}</StyledCardLink>
      </StyledFooter>
    </ExpandableCard>
  );
}

export default InvestmentGoal;
