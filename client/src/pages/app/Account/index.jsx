import { useUpdatePageLayout } from '@/hooks/pageLayout/';
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
  useUpdatePageLayout('myAccount');
  return (
    <StyledContainer>
      <UserAvatar />
      <NavigationCards options={accountOptions} />
    </StyledContainer>
  );
}

export default Account;
