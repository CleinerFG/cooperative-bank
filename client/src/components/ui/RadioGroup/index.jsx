import { useState } from 'react';
import RadioButton from './RadioButton';

import styles from './styles.module.scss';

function RadioGroup({ options, defaultValue, groupName, onRadioChecked }) {
  const [selectedValue, setSelectedValue] = useState(defaultValue || '');

  const handleChange = (ev) => {
    setSelectedValue(ev.target.value);
    onRadioChecked(ev.target.value);
  };

  return (
    <div className={styles.container}>
      {options.map(({ label, value, Icon }) => (
        <div className={styles.radioContent}>
          {Icon && <Icon />}
          <RadioButton
            key={value}
            name={groupName}
            label={label}
            value={value}
            checked={selectedValue === value}
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
  );
}

export default RadioGroup;
