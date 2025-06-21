import { useId } from 'react';
import {
  StyledContainer,
  StyledLabelContainer,
  StyledRadio,
} from './Radio.styles';

function RadioButton({ name, label, value, Icon, checked, handleChange }) {
  const id = useId();
  return (
    <StyledContainer onClick={() => handleChange(value)}>
      <StyledLabelContainer>
        {Icon && <Icon />}
        <label htmlFor={id}>{label}</label>
      </StyledLabelContainer>
      <StyledRadio
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={() => handleChange(value)}
      />
    </StyledContainer>
  );
}

export default RadioButton;
