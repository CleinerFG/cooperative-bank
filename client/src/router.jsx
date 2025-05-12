import { createBrowserRouter } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import AppHome from './pages/app/Home';

import Settings from './pages/app/Settings';
import Appearance from './pages/app/Settings/Appearance';
import SettingsLayout from './pages/app/Settings/components/Layout';

const router = createBrowserRouter([
  {
    path: '/app',
    element: <AppLayout />,
    children: [
      { index: true, element: <AppHome /> },
      // { path: 'settings', element: <Settings /> },
      // { path: 'settings/appearance', element: <Appearance /> },
      {
        path: 'settings',
        element: <SettingsLayout />,
        children: [
          { index: true, element: <Settings /> },
          { path: 'appearance', element: <Appearance /> },
        ],
      },
    ],
  },
]);

export default router;
