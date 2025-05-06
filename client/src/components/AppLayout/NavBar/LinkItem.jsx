import { NavLink } from 'react-router-dom';

import * as Icons from 'lucide-react';
import styles from './styles.module.scss';

function LinkItem({ label, redirectTo, iconName }) {
  const Icon = Icons[iconName];

  return (
    <NavLink
      to={redirectTo}
      end
      className={({ isActive }) =>
        isActive ? styles.linkItemActive : styles.linkItem
      }
    >
      <Icon />
      <span>{label}</span>
    </NavLink>
  );
}

export default LinkItem;
