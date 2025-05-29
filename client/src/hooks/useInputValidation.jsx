import { useState, useCallback } from 'react';

function useInputValidation(rules = []) {
  const [state, setState] = useState({
    isValid: null,
    isFirstValidation: true,
    errors: [],
  });

  const validateData = useCallback(
    (inputValue) => {
      const validationErrors = rules
        .filter((rule) => !rule.test(inputValue))
        .map((rule) => rule.message);

      const valid = validationErrors.length === 0;

      setState((prev) => ({
        ...prev,
        isValid: valid,
        errors: validationErrors,
        isFirstValidation: false,
      }));

      return valid;
    },
    [rules]
  );

  const handleValidationBlur = useCallback(
    (ev) => {
      validateData(ev.target.value);
    },
    [validateData]
  );

  const handleValidationChange = useCallback(
    (ev) => {
      if (state.isFirstValidation) return;
      validateData(ev.target.value);
    },
    [validateData, state.isFirstValidation]
  );

  return {
    isValid: state.isValid,
    errors: state.errors,
    handleValidationBlur,
    handleValidationChange,
  };
}

export default useInputValidation;
