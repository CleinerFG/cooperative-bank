import { useState } from 'react';
import RadioRow from './RadioRow';

import styles from './styles.module.scss';

function RadioGroup({ options, defaultValue = '', groupName, onRadioChecked }) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleRadioChecked = (value) => {
    setSelectedValue(value);
    onRadioChecked(value);
  };

  return (
    <div className={styles.container}>
      {options.map(({ label, value, Icon }) => (
        <RadioRow
          key={value}
          label={label}
          value={value}
          Icon={Icon}
          checked={selectedValue === value}
          onSelect={handleRadioChecked}
          name={groupName}
        />
      ))}
    </div>
  );
}

export default RadioGroup;
