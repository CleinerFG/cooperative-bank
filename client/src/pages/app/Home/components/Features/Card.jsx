import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';
import ActionLink from '../ActionLink';

function Card({ featureName, items }) {
  const { t } = useTranslation();
  return (
    <section className={styles.card}>
      <h2>{t(featureName)}</h2>
      <div className={styles.actionLinks}>
        {items.map((item) => (
          <ActionLink
            className={styles.actionLink}
            {...item}
            key={item.navigateTo}
          />
        ))}
      </div>
    </section>
  );
}

export default Card;
