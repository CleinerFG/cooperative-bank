import { ItemCategoriesProvider } from '@/contexts/ItemCategoriesContext';
import CategoryPanel from './CategoryPanel';
import DataContainer from './DataContainer';

function ItemCategories({ categories, dataType, DataCard }) {
  return (
    <ItemCategoriesProvider categories={categories}>
      <CategoryPanel />
      <DataContainer dataType={dataType} DataCard={DataCard} />
    </ItemCategoriesProvider>
  );
}

export default ItemCategories;
