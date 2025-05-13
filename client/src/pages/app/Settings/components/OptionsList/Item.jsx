import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import * as Icons from 'lucide-react';
import styles from './styles.module.scss';

const ChevronIcon = Icons.ChevronRight;

function Item({ label, navigateTo, iconName }) {
  const { t } = useTranslation();
  const Icon = Icons[iconName];

  return (
    <li className={styles.listItem}>
      <Link className={styles.link} to={navigateTo}>
        <div className={styles.labelContainer}>
          <Icon />
          <span>{t(label)}</span>
        </div>
        <ChevronIcon />
      </Link>
    </li>
  );
}

export default Item;
