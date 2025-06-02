import { useEffect, useReducer } from 'react';
import reducer from './reducer.js';

function useForm(elements = []) {
  const [state, dispatch] = useReducer(reducer, {
    dataIsValid: false,
    elements,
  });

  const handleElementValidValue = (name, value) => {
    dispatch({
      type: 'UPDATE_ELEMENT_VALID_VALUE',
      payload: { name, value },
    });
  };

  useEffect(() => {
    dispatch({ type: 'SET_DATA_IS_VALID' });
  }, [state.elements]);

  return { formData: state, handleElementValidValue };
}

export default useForm;
