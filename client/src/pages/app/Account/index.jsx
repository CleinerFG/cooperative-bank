import UpdateLayout from '@/components/layouts/PageLayout/components/UpdateLayout';
import { StyledNavigationCards } from '@/components/containers/StyledNavigationCards';
import NavigationCard from '@/components/cards/NavigationCard';
import { UserRoundCog, Landmark } from 'lucide-react';
import UserAvatar from './components/UserAvatar';
import { StyledContainer } from './Account.styles';

const BASE_ROUTE = '/app/account';
const accountOptions = [
  {
    label: 'personalDetails',
    navigateTo: BASE_ROUTE + '/personal-details',
    Icon: <UserRoundCog />,
  },
  {
    label: 'bankDetails',
    navigateTo: BASE_ROUTE + '/bank-details',
    Icon: <Landmark />,
  },
];

function Account() {
  return (
    <StyledContainer>
      <UpdateLayout title="myAccount" />
      <UserAvatar />
      <StyledNavigationCards>
        {accountOptions.map((item) => (
          <NavigationCard {...item} key={item.label} />
        ))}
      </StyledNavigationCards>
    </StyledContainer>
  );
}

export default Account;
