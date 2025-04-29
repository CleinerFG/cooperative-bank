import { createBrowserRouter } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import AppHome from './pages/app/Home';

const router = createBrowserRouter([
  {
    path: '/app',
    element: <AppLayout />,
    children: [{ index: true, element: <AppHome /> }],
  },
]);

export default router;
