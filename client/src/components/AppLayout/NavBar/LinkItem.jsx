import { NavLink } from 'react-router-dom';

import * as Icons from 'lucide-react';
import styles from './styles.module.scss';

function LinkItem({ label, navigateTo, iconName }) {
  const Icon = Icons[iconName];

  return (
    <NavLink
      to={navigateTo}
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
