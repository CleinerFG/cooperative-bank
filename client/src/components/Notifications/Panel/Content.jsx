import { useNotifications } from '@/hooks/notifications';
import NotificationCard from '../NotificationCard';
import { StyledContent } from './Panel.styles';
import WithoutNotifications from './WithoutNotifications';

function Content() {
  const { notifications } = useNotifications();
  return (
    <StyledContent>
      {notifications.length > 0 ? (
        notifications.map((notif) => (
          <NotificationCard
            key={notif.id}
            id={notif.id}
            isRead={notif.isRead}
          />
        ))
      ) : (
        <WithoutNotifications />
      )}
    </StyledContent>
  );
}

export default Content;
