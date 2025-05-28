import UpdateLayout from '@/components/layouts/PageLayout/components/UpdateLayout';
import NavigationCards from '@/components/containers/NavigationCards';
import { Eclipse, Languages } from 'lucide-react';

const BASE_ROUTE = '/app/settings';
const settingsOptions = [
  {
    label: 'appearance',
    navigateTo: BASE_ROUTE + '/appearance',
    Icon: Eclipse,
  },
  {
    label: 'languages',
    navigateTo: BASE_ROUTE + '/languages',
    Icon: Languages,
  },
];

function Settings() {
  return (
    <>
      <UpdateLayout title="settings" />
      <NavigationCards options={settingsOptions} />
    </>
  );
}

export default Settings;
