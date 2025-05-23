import PageLayout from '@/components/layouts/PageLayout';
import Account from '@/pages/app/Account';
import PersonalDetails from '@/pages/app/Account/PersonalDetails';

export default {
  path: 'account',
  element: <PageLayout />,
  children: [
    { index: true, element: <Account /> },
    { path: 'personal-details', element: <PersonalDetails /> },
  ],
};
