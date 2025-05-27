import { useTranslation } from 'react-i18next';
import ProgressBar from '@/components/ProgressBar';
import { Goal } from 'lucide-react';
import { SeeMoreButton } from '@/components/cards/ExpandableCard';
import {
  StyledCardHeader,
  StyledCardTitle,
} from '@/components/cards/StyledBaseCard';

function VisibleContent() {
  const { t } = useTranslation();

  return (
    <div>
      <StyledCardHeader>
        <StyledCardTitle>{t('investGoal')}</StyledCardTitle>
        <Goal />
      </StyledCardHeader>
      <SeeMoreButton />
      <ProgressBar current={2345.45} total={5000} formatCurrency />
    </div>
  );
}

export default VisibleContent;
