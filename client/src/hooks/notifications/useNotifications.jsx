import useNotificationsContext from './useNotificationsContext';

function useNotifications() {
  const { state, dispatch } = useNotificationsContext();

  const togglePanelIsOpen = () =>
    dispatch({
      type: 'SET_PANEL_IS_OPEN',
      payload: { isOpen: !state.panelIsOpen },
    });

  const setPanelIsOpen = (isOpen) =>
    dispatch({ type: 'SET_PANEL_IS_OPEN', payload: { isOpen } });

  const setNotificationRead = (id) =>
    dispatch({ type: 'SET_NOTIFICATION_READ', payload: { id } });

  const setAllNotificationsRead = () =>
    dispatch({ type: 'SET_ALL_NOTIFICATIONS_READ' });

  const removeNotification = (id) =>
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: { id } });

  const removeAllNotifications = () =>
    dispatch({ type: 'REMOVE_ALL_NOTIFICATIONS' });
  return {
    panelIsOpen: state.panelIsOpen,
    notifications: state.notifications,
    togglePanelIsOpen,
    setPanelIsOpen,
    setNotificationRead,
    setAllNotificationsRead,
    removeNotification,
    removeAllNotifications,
  };
}

export default useNotifications;
