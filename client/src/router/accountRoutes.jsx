import Account from '@/pages/app/Account';

export default {
  path: 'account',
  children: [{ index: true, element: <Account /> }],
};
