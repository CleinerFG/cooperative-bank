// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export default function EnterAndExitAnimation({
  children,
  isVisible,
  onAnimationComplete,
}) {
  return (
    <AnimatePresence onExitComplete={onAnimationComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.2,
            scale: { type: 'spring', bounce: 0.2, duration: 0.3 },
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
