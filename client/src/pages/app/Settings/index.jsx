import { useUpdatePageLayout } from '@/hooks/pageLayout';
import NavigationCards from '@/components/containers/NavigationCards';
import { Eclipse, Languages, LockKeyhole, UserRoundCog } from 'lucide-react';

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
  {
    label: 'accountPreferences',
    navigateTo: BASE_ROUTE + '/account-preferences',
    Icon: UserRoundCog,
  },
  {
    label: 'security',
    navigateTo: BASE_ROUTE + '/security',
    Icon: LockKeyhole,
  },
];

function Settings() {
  useUpdatePageLayout('settings');
  return <NavigationCards options={settingsOptions} />;
}

export default Settings;
