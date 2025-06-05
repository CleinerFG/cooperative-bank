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
      {Object.keys(items).map((key) => (
        <StyledRow key={key}>
          <StyledLabel>{t(key)}:</StyledLabel>
          <StyledValue>{t(items[key])}</StyledValue>
        </StyledRow>
      ))}
    </StyledContainer>
  );
}

export default DataDisplay;
