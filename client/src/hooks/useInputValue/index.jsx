import { useReducer } from 'react';
import { reducer } from './reducer';

function useInputValue(initialState) {
  const [state, dispatch] = useReducer(reducer, {
    primitive: initialState.primitive || '',
    formatted: initialState.formatted || '',
  });

  const setPrimitive = (value) => {
    dispatch({
      type: 'SET_PRIMITIVE',
      payload: { primitive: value },
    });
  };

  const setFormatted = (value) => {
    dispatch({
      type: 'SET_FORMATTED',
      payload: { formatted: value },
    });
  };

  return {
    valueState: {
      primitive: state.primitive,
      formatted: state.formatted,
    },
    setValueState: {
      primitive: setPrimitive,
      formatted: setFormatted,
    },
  };
}

export default useInputValue;
