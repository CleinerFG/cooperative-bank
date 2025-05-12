import { useId } from 'react';

import styles from './styles.module.scss';

function RadioButton({ name, label, value, checked, onChange }) {
  const id = useId();
  return (
    <div className={styles.radioContainer}>
      <label htmlFor={id}>{label}</label>
      <input
        className={styles.radio}
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}

export default RadioButton;
