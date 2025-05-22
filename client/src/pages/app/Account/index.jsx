import UpdateLayout from '@/components/layouts/PageLayout/components/UpdateLayout';
import UserAvatar from './components/UserAvatar';

function Account() {
  return (
    <div>
      <UpdateLayout title="Profile" />
      <UserAvatar />
    </div>
  );
}

export default Account;
