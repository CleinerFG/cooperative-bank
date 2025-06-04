import { useTranslation } from 'react-i18next';
import {
  StyledContainer,
  StyledInput,
  StyledLabel,
  StyledWrapper,
} from '../baseStyles';
import InputErros from '../InputErrors';

function Input({ label, placeholder }) {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledLabel>{t(label)}</StyledLabel>
      <StyledWrapper>
        <StyledInput placeholder={placeholder} />
      </StyledWrapper>
      <InputErros errors={[]} />
    </StyledContainer>
  );
}

export default Input;
