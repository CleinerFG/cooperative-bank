import StyledOptionRow from '@/components/containers/StyledOptionRow';
import RadioButton from '../RadioButton';

function RadioRow({ label, value, Icon, checked, onSelect, name }) {
  return (
    <StyledOptionRow onClick={() => onSelect(value)}>
      {Icon}
      <RadioButton
        name={name}
        label={label}
        value={value}
        checked={checked}
        onChange={(e) => onSelect(e.target.value)}
      />
    </StyledOptionRow>
  );
}

export default RadioRow;
