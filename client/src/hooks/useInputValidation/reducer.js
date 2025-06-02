export const initialState = {
  isValid: null,
  realTimeValidation: false,
  errors: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case 'VALIDATE':
      return {
        ...state,
        isValid: action.payload.isValid,
        errors: action.payload.errors,
      };
    case 'BLUR':
      return { ...state, realTimeValidation: true };
    default:
      return state;
  }
}
