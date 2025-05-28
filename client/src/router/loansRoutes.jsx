import PageLayout from '@/components/layouts/PageLayout';
import Loans from '@/pages/app/Loans';

export default {
  path: 'loans',
  element: <PageLayout />,
  children: [
    { index: true, element: <Loans /> },
  ],
};
