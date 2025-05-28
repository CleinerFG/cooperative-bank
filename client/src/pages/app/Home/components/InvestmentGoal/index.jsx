import { useTranslation } from 'react-i18next';
import ExpandableCard, {
  SeeMoreButton,
} from '@/components/cards/ExpandableCard';
import Description from './Description';
import ProgressBar from '@/components/ui/ProgressBar';
import {
  StyledHeader,
  StyledTitle,
} from '@/components/cards/BaseCard/BaseCard.styles';
import Footer from './Footer';
import { Goal } from 'lucide-react';

function InvestmentGoal() {
  const { t } = useTranslation();

  return (
    <ExpandableCard
      HiddenContent={
        <>
          <Description /> <Footer />
        </>
      }
    >
      <div>
        <StyledHeader>
          <StyledTitle>{t('investGoal')}</StyledTitle>
          <Goal />
        </StyledHeader>
        <SeeMoreButton />
        <ProgressBar current={2345.45} total={5000} formatCurrency />
      </div>
    </ExpandableCard>
  );
}

export default InvestmentGoal;
