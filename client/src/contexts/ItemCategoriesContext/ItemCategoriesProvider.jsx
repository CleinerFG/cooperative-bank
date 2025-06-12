import { useReducer } from 'react';
import ItemCategoriesContext from './ItemCategoriesContext';
import reducer from './reducer';

function ItemCategoriesProvider({ categories = [], children }) {
  const [state, dispatch] = useReducer(reducer, {
    activeIndex: 0,
    categories,
  });
  return (
    <ItemCategoriesContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemCategoriesContext.Provider>
  );
}

export default ItemCategoriesProvider;
