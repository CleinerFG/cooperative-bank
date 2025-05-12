import { useId } from 'react';

function RadioButton({ name, label, value, checked, onChange }) {
  const id = useId();
  return (
    <>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
}

export default RadioButton;
