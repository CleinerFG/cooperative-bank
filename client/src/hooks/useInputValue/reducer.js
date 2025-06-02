export function reducer(state, action) {
  switch (action.type) {
    case 'SET_PRIMITIVE':
      return {
        ...state,
        primitive: action.payload.primitive,
      };

    case 'SET_FORMATTED':
      return {
        ...state,
        formatted: action.payload.formatted,
      };

    default:
      return state;
  }
}
