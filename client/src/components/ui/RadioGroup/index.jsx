import { useState } from 'react';
import RadioButton from './RadioButton';

function RadioGroup({ options, defaultValue, groupName, onRadioChecked }) {
  const [selectedValue, setSelectedValue] = useState(defaultValue || '');

  const handleChange = (ev) => {
    setSelectedValue(ev.target.value);
    onRadioChecked(ev.target.value);
  };

  return (
    <div>
      {options.map(({ label, value }) => (
        <RadioButton
          key={value}
          name={groupName}
          label={label}
          value={value}
          checked={selectedValue === value}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}

export default RadioGroup;
