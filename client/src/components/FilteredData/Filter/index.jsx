import { useTranslation } from 'react-i18next';
import { useFilterItemsConfig } from '@/hooks/filterItems';
import Button from './Button';
import {
  StyledContainer,
  StyledHeader,
  StyledContent,
  StyledTitle,
} from './Filter.styles';
import { Funnel } from 'lucide-react';

function Filter() {
  const { t } = useTranslation();
  const { filterByProp, filterTypes } = useFilterItemsConfig();
  return (
    <StyledContainer>
      <StyledHeader>
        <Funnel />
        <StyledTitle>
          {t('filterBy')} {t(filterByProp)}
        </StyledTitle>
      </StyledHeader>
      <StyledContent>
        {filterTypes.map((filterType, index) => (
          <Button filterType={filterType} key={index} />
        ))}
      </StyledContent>
    </StyledContainer>
  );
}

export default Filter;
