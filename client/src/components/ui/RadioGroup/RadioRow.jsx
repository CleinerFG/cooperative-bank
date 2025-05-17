import RadioButton from '../RadioButton';
import { StyledRow } from './RadioGroup.styles';

function RadioRow({ label, value, Icon, checked, onSelect, name }) {
  return (
    <StyledRow onClick={() => onSelect(value)}>
      {Icon && <Icon />}
      <RadioButton
        name={name}
        label={label}
        value={value}
        checked={checked}
        onChange={(e) => onSelect(e.target.value)}
      />
    </StyledRow>
  );
}

export default RadioRow;
