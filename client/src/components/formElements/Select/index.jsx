import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import { useController } from 'react-hook-form';
import FieldError from '../FieldError';
import { StyledContainer, StyledLabel } from '../baseStyles';
import { StyledSelect } from './Select.styles';

function Select({ control, name, label, options }) {
  const id = useId();
  const { t } = useTranslation();
  const { field, fieldState } = useController({ control, name });

  return (
    <StyledContainer>
      <StyledLabel htmlFor={id}>{t(label)}</StyledLabel>
      <StyledSelect
        $invalidStyle={fieldState.invalid}
        as="select"
        id={id}
        {...field}
      >
        <option disabled value="">
          {t('selectOp')}
        </option>
        {options.map((op) => (
          <option value={op.value} key={op.value}>
            {op.text}
          </option>
        ))}
      </StyledSelect>
      <FieldError error={fieldState.error} />
    </StyledContainer>
  );
}

export default Select;
