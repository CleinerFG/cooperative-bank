import { useId } from 'react';
import { StyledContainer, StyledLabel } from '../baseStyles';
import { StyledSelect } from './Select.styles';
import { useTranslation } from 'react-i18next';

function Select({ label, options, selectedOption, onChange }) {
  const id = useId();
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledLabel htmlFor={id} onChange={(ev) => onChange(ev.target.value)}>
        {t(label)}
      </StyledLabel>
      <StyledSelect as="select" id={id} value={selectedOption}>
        <option disabled>{t('selectOp')}</option>
        {options.map((op) => (
          <option value={op.value} key={op.value}>
            {op.text}
          </option>
        ))}
      </StyledSelect>
    </StyledContainer>
  );
}

export default Select;
