// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export default function SlideAnimation({
  children,
  isVisible,
  onAnimationComplete,
  initialPosition = {
    y: 0,
    x: 0,
  },
  endPosition = {
    y: 0,
    x: 0,
  },
}) {
  return (
    <AnimatePresence onExitComplete={onAnimationComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: initialPosition.x, y: initialPosition.y }}
          animate={{ opacity: 1, x: endPosition.x, y: endPosition.y }}
          exit={{ opacity: 0, x: initialPosition.x, y: initialPosition.y }}
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
