import { useTranslation } from 'react-i18next';

import BankCard from './BankCard';
import StyledSection from '@/pages/app/Home/components/StyledSection';
import StyledCarousel from '@/components/containers/StyledCarousel';

function MyCards() {
  const { t } = useTranslation();
  return (
    <StyledSection>
      <h2>{t('myCards')}</h2>
      <StyledCarousel>
        <BankCard
          type="credit"
          number="1234"
          holderName="MEG THOMAS"
          validity="07/29"
        />
        <BankCard
          type="debit"
          number="1234"
          holderName="MEG THOMAS"
          validity="07/29"
        />
      </StyledCarousel>
    </StyledSection>
  );
}

export default MyCards;
