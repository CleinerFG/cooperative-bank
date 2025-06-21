import { useReducer } from 'react';
import NotificationsContext from './NotificationsContext';
import reducer from './reducer';

function NotificationsProvider({ data, children }) {
  const [state, dispatch] = useReducer(reducer, {
    panelIsOpen: false,
    notifications: data,
  });

  return (
    <NotificationsContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationsContext.Provider>
  );
}

export default NotificationsProvider;
