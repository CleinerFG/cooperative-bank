function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_ACTIVE_IDX': {
      return action.payload.index === state.activeIndex
        ? state
        : {
            ...state,
            activeIndex: action.payload.index,
          };
    }

    default:
      return state;
  }
}

export default reducer;
