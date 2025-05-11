import { motion } from 'motion/react';

import styles from './styles.module.scss';

function MotionWrapper({ motionKey, direction, children }) {
  const offset = 100;
  const xInital = direction === 'forward' ? offset : -offset;
  return (
    <>
      <motion.div
        key={motionKey}
        initial={{ x: `${xInital}%`, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={styles.motionPage}
      >
        {children}
      </motion.div>
    </>
  );
}

export default MotionWrapper;
