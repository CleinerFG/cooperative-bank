import PublicFormPageLayout from '@/components/layouts/PublicFormPageLayout';
import PublicLayout from '@/components/layouts/PublicLayout';
import Login from '@/pages/public/Login';
import Register from '@/pages/public/Register';

export default {
  path: '/',
  element: <PublicLayout />,
  // errorElement: <AppLayout />,
  children: [
    {
      path: 'register',
      element: <PublicFormPageLayout />,
      children: [
        {
          index: true,
          element: <Register />,
        },
      ],
    },
    {
      path: 'login',
      element: <PublicFormPageLayout />,
      children: [
        {
          index: true,
          element: <Login />,
        },
      ],
    },
  ],
};