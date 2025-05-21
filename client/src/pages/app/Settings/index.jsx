import UpdateLayout from '@/components/layouts/PageLayout/components/UpdateLayout';
import { Eclipse, Languages } from 'lucide-react';
import NavigationCard from '@/components/cards/NavigationCard';
import { StyledNavigationCards } from '@/components/containers/StyledNavigationCards';

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
    <>
      <UpdateLayout title="settings" />
      <StyledNavigationCards>
        {settingsOptions.map((item) => (
          <NavigationCard {...item} key={item.label} />
        ))}
      </StyledNavigationCards>
    </>
  );
}

export default Settings;
