import OptionsList from './components/OptionsList';
import UpdateLayout from './components/Layout/UpdateLayout';

const BASE_ROUTE = '/app/settings';

const settingsOptions = [
  {
    label: 'Appearance',
    navigateTo: BASE_ROUTE + '/appearance',
    iconName: 'Eclipse',
  },
  {
    label: 'Languages',
    navigateTo: BASE_ROUTE + '/languages',
    iconName: 'Languages',
  },
];

function Settings() {
  return (
    <>
      <UpdateLayout title="Settings" />
      <OptionsList items={settingsOptions} />
    </>
  );
}

export default Settings;
