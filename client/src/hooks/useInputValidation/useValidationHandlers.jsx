import { useCallback } from 'react';
import { getValidationResult } from './utils';

export function useValidationHandlers(state, dispatch, rules) {
  const validateData = useCallback(() => {
    const { isValid, errors } = getValidationResult(state.tempValue, rules);
    dispatch({ type: 'VALIDATE', payload: { isValid, errors } });
  }, [state.tempValue, rules, dispatch]);

  const handleValidationBlur = () => {
    dispatch({ type: 'BLUR' });
    validateData();
  };

  const handleValidationChange = (ev) => {
    dispatch({
      type: 'SET_TEMP_VALUE',
      payload: { tempValue: ev.target.value },
    });
  };

  return {
    validateData,
    handleValidationBlur,
    handleValidationChange,
  };
}
