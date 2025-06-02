import { useReducer } from 'react';
import { reducer, initialState } from './reducer';
import { useValidationHandlers } from './useValidationHandlers';
import { useValidationEffects } from './useValidationEffects';

function useInputValidation(value, rules = [], onValidValue) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { validateData, handleValidationBlur } = useValidationHandlers(
    value,
    dispatch,
    rules
  );

  useValidationEffects(value, state, validateData, onValidValue);

  return {
    validationState: {
      isValid: state.isValid,
      errors: state.errors,
    },
    handleValidationBlur,
  };
}

export default useInputValidation;
