import OptionsList from './components/OptionsList';
import UpdateLayout from './components/Layout/UpdateLayout';

import { Settings2 } from 'lucide-react';

const BASE_ROUTE = '/app/settings';
const settingsOptions = [
  {
    label: 'appearance',
    navigateTo: BASE_ROUTE + '/appearance',
    iconName: 'Eclipse',
  },
  {
    label: 'languages',
    navigateTo: BASE_ROUTE + '/languages',
    iconName: 'Languages',
  },
];

function Settings() {
  return (
    <>
      <UpdateLayout title="settings" Icon={Settings2} />
      <OptionsList items={settingsOptions} />
    </>
  );
}

export default Settings;
