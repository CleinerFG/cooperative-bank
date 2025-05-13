import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

function ActionLink({ label, navigateTo, Icon }) {
  const { t } = useTranslation();

  return (
    <Link className={styles.actionLink} to={navigateTo}>
      <div className={styles.iconContainer}>{Icon && <Icon />}</div>
      <span className={styles.label}>{t(label)}</span>
    </Link>
  );
}

export default ActionLink;
