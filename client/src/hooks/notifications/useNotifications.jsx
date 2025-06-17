import useNotificationsContext from './useNotificationsContext';

function useNotifications() {
  const { state, dispatch } = useNotificationsContext();

  const togglePanelIsOpen = () => dispatch({ type: 'TOGGLE_PANEL_IS_OPEN' });

  const setNotificationRead = (id) =>
    dispatch({ type: 'SET_NOTIFICATION_READ', payload: { id } });

  const removeNotification = (id) =>
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: { id } });

  return {
    panelIsOpen: state.panelIsOpen,
    notifications: state.notifications,
    togglePanelIsOpen,
    setNotificationRead,
    removeNotification,
  };
}

export default useNotifications;
