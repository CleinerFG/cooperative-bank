// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export default function EnterAnimation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.2,
        scale: { type: 'spring', visualDuration: 0.3, bounce: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
}
