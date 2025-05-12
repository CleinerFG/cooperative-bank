import SettingsLayout from '../pages/app/Settings/components/Layout';
import Settings from '../pages/app/Settings';
import Appearance from '../pages/app/Settings/Appearance';
import Languages from '../pages/app/Settings/Languages';

export default {
  path: 'settings',
  element: <SettingsLayout />,
  children: [
    { index: true, element: <Settings /> },
    { path: 'appearance', element: <Appearance /> },
    { path: 'languages', element: <Languages /> },
  ],
};
