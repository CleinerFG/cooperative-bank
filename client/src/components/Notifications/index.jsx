import NotificationsProvider from '@/contexts/NotificationsContext/NotificationsProvider';
import Button from './Button';
import Panel from './Panel';
import mockData from './mockData';

function Notifications() {
  return (
    <NotificationsProvider data={mockData}>
      <Button />
      <Panel />
    </NotificationsProvider>
  );
}

export default Notifications;
