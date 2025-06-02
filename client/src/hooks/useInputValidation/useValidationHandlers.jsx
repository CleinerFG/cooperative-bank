import { useCallback } from 'react';
import { getValidationResult } from './utils';

export function useValidationHandlers(value, dispatch, rules) {
  const validateData = useCallback(() => {
    const { isValid, errors } = getValidationResult(value, rules);
    dispatch({ type: 'VALIDATE', payload: { isValid, errors } });
  }, [value, rules, dispatch]);

  const handleValidationBlur = () => {
    dispatch({ type: 'BLUR' });
    validateData();
  };

  return {
    validateData,
    handleValidationBlur,
  };
}
