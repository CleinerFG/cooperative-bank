import { Link } from 'react-router-dom';

import * as Icons from 'lucide-react';
import styles from './styles.module.scss';

function ActionLink({ label, navigateTo, iconName }) {
  const Icon = Icons[iconName];

  return (
    <Link className={styles.actionLink} to={navigateTo}>
      <div className={styles.iconContainer}>
        <Icon />
      </div>
      <span className={styles.label}>{label}</span>
    </Link>
  );
}

export default ActionLink;
