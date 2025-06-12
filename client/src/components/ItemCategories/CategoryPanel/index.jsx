import { useItemCategories } from '@/hooks/itemCategories';
import { StyledContainer } from './CategoryPanel.styles';
import Button from './Button';

function CategoryPanel() {
  const { categories } = useItemCategories();
  return (
    <StyledContainer>
      {categories.map((category, idx) => (
        <Button label={category.name} index={idx} key={idx} />
      ))}
    </StyledContainer>
  );
}

export default CategoryPanel;
