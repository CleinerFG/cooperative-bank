import { useTranslation } from 'react-i18next';
import {
  StyledContainer,
  StyledLabel,
  StyledRow,
  StyledValue,
} from './DataDisplay.styles';

function DataDisplay({ items }) {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      {items.map((item) => (
        <StyledRow key={item.label}>
          <StyledLabel>{t(item.label)}:</StyledLabel>
          <StyledValue>{t(item.value)}</StyledValue>
        </StyledRow>
      ))}
    </StyledContainer>
  );
}

export default DataDisplay;
