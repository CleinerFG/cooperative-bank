import { useTranslation } from 'react-i18next';
import { useController } from 'react-hook-form';
import { StyledContainer, StyledLabel, StyledWrapper } from '../baseStyles';
import InputError from '../InputError';
import MaskedInput from './MaskedInput';

function Input({ control, name, label, maskType }) {
  const { t } = useTranslation();
  const { field, fieldState } = useController({ name, control });


  return (
    <StyledContainer>
      <StyledLabel>{t(label)}</StyledLabel>
      <StyledWrapper $invalidStyle={fieldState.error}>
        <MaskedInput type={maskType} {...field} />
      </StyledWrapper>
      <InputError error={fieldState.error} />
    </StyledContainer>
  );
}

export default Input;
