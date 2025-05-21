import PageLayout from '@/components/layouts/PageLayout';
import Account from '@/pages/app/Account';

export default {
  path: 'account',
  element: <PageLayout />,
  children: [{ index: true, element: <Account /> }],
};
