import AppLayout from '@/components/AppLayout';
import Home from '@/pages/app/Home';

import settingsRoutes from './settingsRoutes';

export default {
  path: '/app',
  element: <AppLayout />,
  children: [{ index: true, element: <Home /> }, settingsRoutes],
};
