import { useTranslation } from 'react-i18next';
import { useController } from 'react-hook-form';
import { StyledContainer, StyledLabel, StyledWrapper } from '../baseStyles';
import FieldError from '../FieldError';
import MaskedInput from './MaskedInput';

function Input({
  control,
  name,
  label,
  inputType,
  maskType,
  isDisabled,
  ToolButtons,
}) {
  const { t } = useTranslation();
  const { field, fieldState } = useController({
    name,
    control,
  });
  return (
    <StyledContainer>
      <StyledLabel>{t(label)}</StyledLabel>
      <StyledWrapper $invalidStyle={fieldState.error}>
        <MaskedInput
          disabled={isDisabled}
          inputType={inputType}
          maskType={maskType}
          {...field}
        />
        {ToolButtons}
      </StyledWrapper>
      <FieldError error={fieldState.error} />
    </StyledContainer>
  );
}

export default Input;
