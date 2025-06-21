// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export default function FadeInAnimation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
