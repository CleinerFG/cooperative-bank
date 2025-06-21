import { useContext } from 'react';
import { NotificationsContext } from '@/contexts/NotificationsContext/';

function useNotificationsContext() {
  return useContext(NotificationsContext);
}

export default useNotificationsContext;
