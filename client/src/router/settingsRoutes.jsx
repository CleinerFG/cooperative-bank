import PageLayout from '@/components/layouts/PageLayout';
import Settings from '@/pages/app/Settings';
import Appearance from '@/pages/app/Settings/Appearance';
import Languages from '@/pages/app/Settings/Languages';
import AccountPreferences from '@/pages/app/Settings/AccountPreferences';
import Security from '@/pages/app/Settings/Security';

export default {
  path: 'settings',
  element: <PageLayout />,
  children: [
    { index: true, element: <Settings /> },
    { path: 'appearance', element: <Appearance /> },
    { path: 'languages', element: <Languages /> },
    { path: 'account-preferences', element: <AccountPreferences /> },
    { path: 'security', element: <Security /> },
  ],
};
