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
        <StyledRow key={item.name}>
          <StyledLabel>{t(item.name)}:</StyledLabel>
          <StyledValue>{t(item.value)}</StyledValue>
        </StyledRow>
      ))}
    </StyledContainer>
  );
}

export default DataDisplay;
