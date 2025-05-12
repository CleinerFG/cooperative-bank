import { Outlet, useMatch } from 'react-router-dom';
import { useState } from 'react';
import { LayoutContext } from '../../contexts/layout';

import styles from './styles.module.scss';

function SettingsLayout() {
  const [layoutProps, setLayoutProps] = useState({ title: '', Icon: null });
  const matchRootRoute = useMatch('app/settings/');

  return (
    <LayoutContext.Provider value={{ layoutProps, setLayoutProps }}>
      <div
        className={
          matchRootRoute ? styles.titleContainer : styles.titleContainerWeak
        }
      >
        {layoutProps.Icon && <layoutProps.Icon className={styles.icon} />}
        <h1 className={styles.title}>{layoutProps.title}</h1>
      </div>
      <main>
        <Outlet />
      </main>
    </LayoutContext.Provider>
  );
}

export default SettingsLayout;
