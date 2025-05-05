import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export default function NavLink({ txt, redirectTo, children }) {
  return (
    <Link to={redirectTo} className={styles.item}>
      {children}
      <span>{txt}</span>
    </Link>
  );
}
