import { useItemCategories } from '@/hooks/itemCategories';
import { useTranslation } from 'react-i18next';
import {
  StyledCardsContainer,
  StyledContainer,
  StyledSubTitle,
} from './DataContainer.styles';

function DataContainer({ DataCard }) {
  const { activeCategory } = useItemCategories();
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledSubTitle>{t(activeCategory.title)}</StyledSubTitle>
      <StyledCardsContainer>
        {activeCategory.data.map(
          (item) => DataCard && <DataCard {...item} key={item.id} />
        )}
      </StyledCardsContainer>
    </StyledContainer>
  );
}

export default DataContainer;
