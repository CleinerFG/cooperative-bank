import { useTranslation } from 'react-i18next';
import {
  StyledContainer,
  StyledLabel,
  StyledWrapper,
} from '../baseStyles';
import InputErros from '../InputErrors';
import MaskedInput from './MaskedInput';

function Input({ label, maskType, ...props }) {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledLabel>{t(label)}</StyledLabel>
      <StyledWrapper>
        <MaskedInput type={maskType} {...props} />
      </StyledWrapper>
      <InputErros errors={[]} />
    </StyledContainer>
  );
}

export default Input;
