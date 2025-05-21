import AppLayout from '@/components/AppLayout';
import Home from '@/pages/app/Home';

import settingsRoutes from './settingsRoutes';
import accountRoutes from './accountRoutes';

export default {
  path: '/app',
  element: <AppLayout />,
  children: [{ index: true, element: <Home /> }, settingsRoutes, accountRoutes],
};
