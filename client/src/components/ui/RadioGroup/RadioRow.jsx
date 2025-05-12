import RadioButton from '../RadioButton';
import styles from './styles.module.scss';

function RadioRow({ label, value, Icon, checked, onSelect, name }) {
  return (
    <div className={styles.rowContainer} onClick={() => onSelect(value)}>
      {Icon && <Icon />}
      <RadioButton
        name={name}
        label={label}
        value={value}
        checked={checked}
        onChange={(e) => onSelect(e.target.value)}
      />
    </div>
  );
}

export default RadioRow;
