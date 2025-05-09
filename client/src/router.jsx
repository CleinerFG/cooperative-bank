import { createBrowserRouter } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import AppHome from './pages/app/Home';
import Settings from './pages/app/Settings';

const router = createBrowserRouter([
  {
    path: '/app',
    element: <AppLayout />,
    children: [
      { index: true, element: <AppHome /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
]);

export default router;
