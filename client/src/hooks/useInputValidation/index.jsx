import { useReducer } from 'react';
import { reducer, initialState } from './reducer';
import { useValidationHandlers } from './useValidationHandlers';
import { useValidationEffects } from './useValidationEffects';

function useInputValidation(initialValue = '', rules = [], onValidValue) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    tempValue: initialValue,
  });

  const { validateData, handleValidationBlur, handleValidationChange } =
    useValidationHandlers(state, dispatch, rules);

  useValidationEffects(state, validateData, onValidValue);

  return {
    validationState: {
      tempValue: state.tempValue,
      isValid: state.isValid,
      errors: state.errors,
    },
    validationHandlers: {
      blur: handleValidationBlur,
      change: handleValidationChange,
    },
  };
}

export default useInputValidation;
