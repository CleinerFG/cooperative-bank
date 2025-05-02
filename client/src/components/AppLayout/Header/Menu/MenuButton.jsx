import { IoMenu } from 'react-icons/io5';

import styles from '../../../../styles/components/menu.module.scss';

export default function MenuButton({ ref, onToggleNav }) {
  return (
    <button
      className={styles.btnMenu}
      type="button"
      ref={ref}
      onClick={() => onToggleNav((prev) => !prev)}
      aria-label="Menu Button"
    >
      <IoMenu />
    </button>
  );
}
