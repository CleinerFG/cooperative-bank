import { useTranslation } from 'react-i18next';
import {
  StyledContainer,
  StyledInput,
  StyledLabel,
  StyledWrapper,
} from './Input.styles';

function Input({ label, placeholder, value, handleOnChange }) {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledLabel>{t(label)}</StyledLabel>
      <StyledWrapper>
        <StyledInput
          value={value}
          placeholder={placeholder}
          onChange={handleOnChange}
        />
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Input;
