import { useState } from 'react';
import RadioButton from './RadioButton';
import { StyledGroupList } from './RadioGroup.styles';

function RadioGroup({ options, defaultValue = '', groupName, onRadioChecked }) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleRadioChecked = (value) => {
    setSelectedValue(value);
    onRadioChecked(value);
  };

  return (
    <StyledGroupList>
      {options.map(({ label, value, Icon }) => (
        <li key={label}>
          <RadioButton
            key={value}
            label={label}
            value={value}
            Icon={Icon}
            checked={selectedValue === value}
            handleChange={handleRadioChecked}
            name={groupName}
          />
        </li>
      ))}
    </StyledGroupList>
  );
}

export default RadioGroup;
