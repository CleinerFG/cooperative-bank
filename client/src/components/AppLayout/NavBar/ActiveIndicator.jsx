// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

import styles from './styles.module.scss';

function ActiveIndicator() {
  return (
    <motion.div
      className={styles.activeIndicator}
      layoutId="activeIndicator"
      transition={{
        type: 'spring',
        stiffness: 600,
        damping: 40,
      }}
    />
  );
}

export default ActiveIndicator;
