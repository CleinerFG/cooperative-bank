import { useTranslation } from 'react-i18next';
import useInputValidation from '@/hooks/useInputValidation';
import {
  StyledContainer,
  StyledInput,
  StyledLabel,
  StyledWrapper,
} from '../baseStyles';
import InputErros from '../InputErrors';
import useInputValue from '@/hooks/useInputValue';
import valueFormatter from './valueFormatter';

function Input({
  label,
  placeholder,
  formatType,
  initialState = {
    primitive: '',
    formatted: '',
  },
  validationRules,
  onValidValue,
}) {
  const { t } = useTranslation();

  const { valueState, setValueState } = useInputValue(initialState);

  const { validationState, handleValidationBlur } = useInputValidation(
    valueState.primitive,
    validationRules,
    onValidValue
  );

  const handleChange = (ev) => {
    const currentValue = ev.target.value;

    if (!formatType) return setValueState.primitive(currentValue);

    const { cleanValue, formattedValue } = valueFormatter(
      currentValue,
      formatType,
      setValueState
    );

    setValueState.primitive(cleanValue);
    setValueState.formatted(formattedValue);
  };

  const inputValue = formatType ? valueState.formatted : valueState.primitive;

  return (
    <StyledContainer>
      <StyledLabel>{t(label)}</StyledLabel>
      <StyledWrapper>
        <StyledInput
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleValidationBlur}
        />
      </StyledWrapper>
      <InputErros errors={validationState.errors} />
    </StyledContainer>
  );
}

export default Input;
