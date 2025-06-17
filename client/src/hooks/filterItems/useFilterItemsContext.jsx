import { useContext } from 'react';
import { FilterItemsContext } from '@/contexts/FilterItemsContext/';

function useFilterItemsContext() {
  return useContext(FilterItemsContext);
}

export default useFilterItemsContext;
