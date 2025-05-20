import { useTranslation } from 'react-i18next';

import BankCard from './BankCard';
import { StyledCardContainer } from '@/components/ui/StyledCardContainer';
import { StyledCarousel } from '@/components/ui/StyledCarousel';

function MyCards() {
  const { t } = useTranslation();
  return (
    <section>
      <StyledCardContainer>
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
      </StyledCardContainer>
    </section>
  );
}

export default MyCards;
