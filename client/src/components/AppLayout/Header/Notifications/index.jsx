import { useState } from 'react';
import NotificationsButton from './NotificationsButton';

function Notifications() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <>
      <NotificationsButton onDisplay={setIsDisplayed} />
      {isDisplayed && alert('show notifications')}
    </>
  );
}

export default Notifications;
