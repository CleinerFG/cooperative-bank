import PageLayout from '@/components/layouts/PageLayout';
import Settings from '@/pages/app/Settings';
import Appearance from '@/pages/app/Settings/Appearance';
import Languages from '@/pages/app/Settings/Languages';

export default {
  path: 'settings',
  element: <PageLayout />,
  children: [
    { index: true, element: <Settings /> },
    { path: 'appearance', element: <Appearance /> },
    { path: 'languages', element: <Languages /> },
  ],
};
