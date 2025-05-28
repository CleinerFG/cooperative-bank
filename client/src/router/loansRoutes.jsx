import PageLayout from '@/components/layouts/PageLayout';
import Loans from '@/pages/app/Loans';
import NewRequest from '@/pages/app/Loans/NewRequest';

export default {
  path: 'loans',
  element: <PageLayout />,
  children: [
    { index: true, element: <Loans /> },
    { path: 'new', element: <NewRequest /> },
  ],
};
