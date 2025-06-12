import { useTranslation } from 'react-i18next';
import { useItemCategories } from '@/hooks/itemCategories';
import { StyledButton } from './CategoryPanel.styles';

function Button({ label, index }) {
  const { t } = useTranslation();
  const { activeIndex, updateActiveIndex } = useItemCategories();
  return (
    <StyledButton
      $active={activeIndex === index}
      onClick={() => updateActiveIndex(index)}
    >
      {t(label)}
    </StyledButton>
  );
}

export default Button;
