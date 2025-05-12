import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { LayoutContext } from '../../contexts/layout';

function SettingsLayout() {
  const [title, setTitle] = useState('');
  return (
    <LayoutContext.Provider value={{ title, setTitle }}>
      <div>
        <h1>{title}</h1>
      </div>
      <main>
        <Outlet />
      </main>
    </LayoutContext.Provider>
  );
}

export default SettingsLayout;
