import { useContext } from 'react';
import { ItemCategoriesContext } from '@/contexts/ItemCategoriesContext';

function useItemCategoriesContext() {
  return useContext(ItemCategoriesContext);
}

export default useItemCategoriesContext;
