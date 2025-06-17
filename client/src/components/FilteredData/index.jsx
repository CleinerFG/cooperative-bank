import { useFilterItems } from '@/hooks/filterItems';
import { StyledContainer } from './FilteredData.styles';
import Filter from './Filter';

function FilteredData({ DataCard, configDataCard }) {
  const { filteredData } = useFilterItems();
  return (
    <>
      <Filter />
      <StyledContainer>
        {filteredData.map(
          (item) =>
            DataCard && <DataCard key={item.id} {...item} {...configDataCard} />
        )}
      </StyledContainer>
    </>
  );
}

export default FilteredData;
