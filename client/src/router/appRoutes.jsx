import AppLayout from '@/components/layouts/AppLayout';
import Home from '@/pages/app/Home';

import settingsRoutes from './settingsRoutes';
import accountRoutes from './accountRoutes';
import loansRoutes from './loansRoutes';

export default {
  path: '/app',
  element: <AppLayout />,
  children: [
    { index: true, element: <Home /> },
    settingsRoutes,
    accountRoutes,
    loansRoutes,
  ],
};
