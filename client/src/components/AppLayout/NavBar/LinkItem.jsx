import { NavLink } from 'react-router-dom';
import ActiveIndicator from './ActiveIndicator';

import * as Icons from 'lucide-react';
import styles from './styles.module.scss';

function LinkItem({ label, navigateTo, iconName }) {
  const Icon = Icons[iconName];

  const renderLinkContent = ({ isActive }) => (
    <>
      {isActive && <ActiveIndicator />}
      <Icon />
      <span>{label}</span>
    </>
  );

  return (
    <NavLink
      to={navigateTo}
      end
      className={({ isActive }) =>
        isActive ? styles.linkItemActive : styles.linkItem
      }
    >
      {renderLinkContent}
    </NavLink>
  );
}

export default LinkItem;
