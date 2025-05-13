import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';
import BankCard from './BankCard';

function Cards() {
  const { t } = useTranslation();
  return (
    <section className={styles.container}>
      <h2>{t('myCards')}</h2>
      <div className={styles.cardCarousel}>
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
      </div>
    </section>
  );
}

export default Cards;
