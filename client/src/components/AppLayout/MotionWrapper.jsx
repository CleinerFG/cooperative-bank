import { motion } from 'motion/react';

import styles from './styles.module.scss';

function MotionWrapper({ key, children }) {
  return (
    <>
      <motion.div
        key={key}
        initial={{ x: '40%', opacity: 0 }}
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
