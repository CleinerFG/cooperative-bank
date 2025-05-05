import { Bell } from 'lucide-react';
import styles from './styles.module.scss';

function BellButton({ onDisplay }) {
  return (
    <button
      type="button"
      className={styles.btn}
      onClick={() => onDisplay((prev) => !prev)}
    >
      <Bell />
      <span className={styles.count}>4</span>
    </button>
  );
}

export default BellButton;
