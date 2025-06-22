import { useNotifications } from '@/hooks/notifications';
import {
  StyledContainer,
  StyledContent,
  StyledIconContainer,
} from './NotificationCard.styles';
import { Trash } from 'lucide-react';
import EnterAndExitAnimation from '@/components/animations/EnterAndExitAnimation';
import useDelayedRemoval from '@/hooks/useDelayedRemoval';

function NotificationCard({ id, isRead }) {
  const { setNotificationRead, removeNotification } = useNotifications();

  const { isVisible, unmountComponent, handleAnimationComplete } =
    useDelayedRemoval(() => removeNotification(id));

  const handleRead = () => {
    if (!isRead) setNotificationRead(id);
  };

  return (
    <EnterAndExitAnimation
      onAnimationComplete={handleAnimationComplete}
      isVisible={isVisible}
    >
      <StyledContainer $isRead={isRead} onClick={handleRead}>
        <StyledContent>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          </span>
        </StyledContent>
        <StyledIconContainer>
          <Trash onClick={unmountComponent} />
        </StyledIconContainer>
      </StyledContainer>
    </EnterAndExitAnimation>
  );
}

export default NotificationCard;
