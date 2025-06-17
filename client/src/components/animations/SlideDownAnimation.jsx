// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export default function SlideDownAnimation({
  children,
  isVisible,
  onAnimationComplete,
}) {
  return (
    <AnimatePresence onExitComplete={onAnimationComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -200 }}
          transition={{
            duration: 0.3,
            scale: { type: 'spring', bounce: 0.2, duration: 0.3 },
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
