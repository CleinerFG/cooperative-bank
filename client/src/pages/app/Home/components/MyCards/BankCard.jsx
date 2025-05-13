import { useTranslation } from 'react-i18next';

import { Globe } from 'lucide-react';
import styles from './styles.module.scss';

function BankCard({ type, number, holderName, validity }) {
  const { t } = useTranslation();
  return (
    <div className={styles.bankCard}>
      <div className={styles.cardType}>
        <span>{`${t('cardOf')} ${t(type)}`}</span>
        <Globe className={styles.cardIcon} />
      </div>
      <div className={styles.cardNumber}>•••• •••• •••• {number}</div>
      <div className={styles.cardDetails}>
        <div>
          <div>{t('holder')}</div>
          <div>{holderName}</div>
        </div>
        <div>
          <div>{t('validity')}</div>
          <div>{validity}</div>
        </div>
      </div>
    </div>
  );
}

export default BankCard;
