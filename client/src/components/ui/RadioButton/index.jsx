import { useId } from 'react';

import styles from './styles.module.scss';

function RadioButton({ name, label, value, checked, onChange }) {
  const id = useId();
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
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
