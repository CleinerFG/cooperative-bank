import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import { useController } from 'react-hook-form';
import {
  StyledContainer,
  StyledLabel,
  StyledWrapper,
} from '../baseFieldStyles';
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
  const id = useId();
  const { field, fieldState } = useController({
    name,
    control,
  });
  return (
    <StyledContainer>
      <StyledLabel htmlFor={id}>{t(label)}</StyledLabel>
      <StyledWrapper $invalidStyle={fieldState.error}>
        <MaskedInput
          id={id}
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
