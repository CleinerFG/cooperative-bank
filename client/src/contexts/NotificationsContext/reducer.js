function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_PANEL_IS_OPEN':
      return { ...state, panelIsOpen: !state.panelIsOpen };

    case 'SET_NOTIFICATION_READ': {
      const id = action.payload.id;
      return {
        ...state,
        notifications: state.notifications.map((notif) => {
          if (notif.id === id) return { ...notif, isRead: true };
          return notif;
        }),
      };
    }

    case 'REMOVE_NOTIFICATION': {
      const id = action.payload.id;
      return {
        ...state,
        notifications: state.notifications.filter((notif) => notif.id !== id),
      };
    }

    default:
      return state;
  }
}

export default reducer;
