import OptionsList from './OptionsList';

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
    <main>
      <OptionsList items={settingsOptions} />
    </main>
  );
}

export default Settings;
