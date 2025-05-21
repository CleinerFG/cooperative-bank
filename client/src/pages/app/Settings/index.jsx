import SettingsLayout from './components/Layout';
import OptionsList from './components/OptionsList';
import { Settings2, Eclipse, Languages } from 'lucide-react';

const BASE_ROUTE = '/app/settings';
const settingsOptions = [
  {
    label: 'appearance',
    navigateTo: BASE_ROUTE + '/appearance',
    Icon: <Eclipse />,
  },
  {
    label: 'languages',
    navigateTo: BASE_ROUTE + '/languages',
    Icon: <Languages />,
  },
];

function Settings() {
  return (
    <SettingsLayout title="settings" Icon={<Settings2 />}>
      <OptionsList items={settingsOptions} />
    </SettingsLayout>
  );
}

export default Settings;
