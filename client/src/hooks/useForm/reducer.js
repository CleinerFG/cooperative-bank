function reducer(state, action) {
  switch (action.type) {
    case 'SET_DATA_IS_VALID': {
      const dataIsValid = state.elements.every((item) => item.isValid);
      return { ...state, dataIsValid };
    }

    case 'UPDATE_ELEMENT_VALID_VALUE': {
      const { name, value } = action.payload;
      const nextElements = state.elements.map((item) => {
        if (item.name === name) {
          return { ...item, value, isValid: true };
        }
        return item;
      });
      return { ...state, elements: nextElements };
    }

    default:
      return state;
  }
}

export default reducer;
