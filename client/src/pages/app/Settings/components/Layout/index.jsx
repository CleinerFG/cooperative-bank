import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { LayoutContext } from '../../contexts/layout';

import styles from './styles.module.scss';

function SettingsLayout() {
  const [layoutProps, setLayoutProps] = useState({ title: '', Icon: null });
  return (
    <LayoutContext.Provider value={{ layoutProps, setLayoutProps }}>
      <div>
        {<layoutProps.Icon />}
        <h1 className={styles.title}>{layoutProps.title}</h1>
      </div>
      <main>
        <Outlet />
      </main>
    </LayoutContext.Provider>
  );
}

export default SettingsLayout;
