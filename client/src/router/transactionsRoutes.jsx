import PageLayout from '@/components/layouts/PageLayout';
import Transactions from '@/pages/app/Transactions';

export default {
  path: 'transactions',
  element: <PageLayout />,
  children: [{ index: true, element: <Transactions /> }],
};
