import { useState } from 'react';
import BellButton from './BellButton';

function Notifications() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <>
      <BellButton onDisplay={setIsDisplayed} />
      {isDisplayed && alert('show notifications')}
    </>
  );
}

export default Notifications;
