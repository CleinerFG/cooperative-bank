export const initialState = {
  tempValue: '',
  isValid: null,
  realTimeValidation: false,
  errors: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case 'SET_TEMP_VALUE':
      return { ...state, tempValue: action.payload.tempValue };
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
