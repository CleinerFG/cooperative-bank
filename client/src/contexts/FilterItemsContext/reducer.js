function reducer(state, action) {
  switch (action.type) {
    case 'SET_ACTIVE_FILTER': {
      const filterType = action.payload.type;
      return { ...state, activeFilter: filterType };
    }

    default:
      return state;
  }
}

export default reducer;
