import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useMatch } from 'react-router-dom';
import ActiveIndicator from './ActiveIndicator';

import styles from './styles.module.scss';

function LinkItem({ label, navigateTo, Icon, strictMatch = false }) {
  const { t } = useTranslation();
  const isActiveMatch = useMatch({ path: navigateTo, end: strictMatch });

  return (
    <NavLink
      to={navigateTo}
      end
      className={isActiveMatch ? styles.linkItemActive : styles.linkItem}
    >
      {
        <>
          {isActiveMatch && <ActiveIndicator />}
          {Icon && <Icon />}
          <span>{t(label)}</span>
        </>
      }
    </NavLink>
  );
}

export default LinkItem;
