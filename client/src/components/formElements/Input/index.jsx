import { useTranslation } from 'react-i18next';
import {
  StyledContainer,
  StyledInput,
  StyledLabel,
  StyledWrapper,
} from '../baseStyles';
import InputErros from '../InputErrors';
import useInputValidation from '@/hooks/useInputValidation';

function Input({
  label,
  placeholder,
  value,
  ToolButtons,
  validationRules,
  onValidValue,
}) {
  const { t } = useTranslation();

  const { validationState, validationHandlers } = useInputValidation(
    value,
    validationRules,
    onValidValue
  );

  return (
    <StyledContainer>
      <StyledLabel>{t(label)}</StyledLabel>
      <StyledWrapper $invalidStyle={validationState.isValid === false}>
        <StyledInput
          value={validationState.tempValue}
          placeholder={placeholder}
          onChange={validationHandlers.change}
          onBlur={validationHandlers.blur}
        />
        {ToolButtons}
      </StyledWrapper>
      <InputErros errors={validationState.errors} />
    </StyledContainer>
  );
}

export default Input;
