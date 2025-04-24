import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/app',
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;
