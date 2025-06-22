import { useTranslation } from 'react-i18next';
import { StyledButton, StyledCount, StyledLabel } from './Button.styles';
import { useFilterItems } from '@/hooks/filterItems';

function Button({ filterType }) {
  const { t } = useTranslation();
  const { activeFilter, filteredData, setFilter } = useFilterItems();
  const isActive = activeFilter === filterType;
  return (
    <StyledButton $active={isActive} onClick={() => setFilter(filterType)}>
      <StyledLabel $active={isActive}>{t(filterType)}</StyledLabel>
      {isActive ? <StyledCount>{filteredData.length}</StyledCount> : null}
    </StyledButton>
  );
}

export default Button;
