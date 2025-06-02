import { useEffect, useRef } from 'react';

export function useValidationEffects(value, state, validateData, onValidValue) {
  const lastValidValueRef = useRef(null);

  // Only executes onValidValue when the valid value is not the same as the previous one
  useEffect(() => {
    if (state.isValid && lastValidValueRef.current !== value) {
      console.log('valid value:', value);
      onValidValue(value);
      lastValidValueRef.current = value;
    }
  }, [state.isValid, value, onValidValue]);

  // Validates each new value after the first blur
  useEffect(() => {
    if (state.realTimeValidation) {
      validateData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
}
