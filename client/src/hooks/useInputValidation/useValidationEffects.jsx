import { useEffect, useRef } from 'react';

export function useValidationEffects(state, validateData, onValidValue) {
  const lastValidValueRef = useRef(null);

  // Only executes onValidValue when the valid value is not the same as the previous one
  useEffect(() => {
    if (state.isValid && lastValidValueRef.current !== state.tempValue) {
      onValidValue(state.tempValue);
      lastValidValueRef.current = state.tempValue;
    }
  }, [state.isValid, state.tempValue, onValidValue]);

  // Validates each new value after the first blur
  useEffect(() => {
    if (state.realTimeValidation) {
      validateData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.tempValue]);
}
