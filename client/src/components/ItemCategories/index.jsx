import { ItemCategoriesProvider } from '@/contexts/ItemCategoriesContext';
import CategoryPanel from './CategoryPanel';
import DataContainer from './DataContainer';

function ItemCategories({ categories, DataCard }) {
  return (
    <ItemCategoriesProvider categories={categories}>
      <CategoryPanel />
      <DataContainer DataCard={DataCard} />
    </ItemCategoriesProvider>
  );
}

export default ItemCategories;
