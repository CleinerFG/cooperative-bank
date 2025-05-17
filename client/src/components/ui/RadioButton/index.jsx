import { useId } from 'react';
import { StyledContainer, StyledRadio } from './Radio.styles';

function RadioButton({ name, label, value, checked, onChange }) {
  const id = useId();
  return (
    <StyledContainer>
      <label htmlFor={id}>{label}</label>
      <StyledRadio
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </StyledContainer>
  );
}

export default RadioButton;
