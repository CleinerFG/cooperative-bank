import { StyledMotionDiv } from './MotionWrapper.styles';

function MotionWrapper({ motionKey, direction, children }) {
  const offset = 100;
  const xInital = direction === 'forward' ? offset : -offset;
  return (
    <StyledMotionDiv
      key={motionKey}
      initial={{ x: `${xInital}%`, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </StyledMotionDiv>
  );
}

export default MotionWrapper;
