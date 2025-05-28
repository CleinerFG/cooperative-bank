import UpdateLayout from '@/components/layouts/PageLayout/components/UpdateLayout';
import { UserRoundCog, Landmark } from 'lucide-react';
import UserAvatar from './components/UserAvatar';
import { StyledContainer } from './Account.styles';
import NavigationCards from '@/components/containers/NavigationCards';

const BASE_ROUTE = '/app/account';
const accountOptions = [
  {
    label: 'personalDetails',
    navigateTo: BASE_ROUTE + '/personal-details',
    Icon: UserRoundCog,
  },
  {
    label: 'bankDetails',
    navigateTo: BASE_ROUTE + '/bank-details',
    Icon: Landmark,
  },
];

function Account() {
  return (
    <StyledContainer>
      <UpdateLayout title="myAccount" />
      <UserAvatar />
      <NavigationCards options={accountOptions} />
    </StyledContainer>
  );
}

export default Account;
