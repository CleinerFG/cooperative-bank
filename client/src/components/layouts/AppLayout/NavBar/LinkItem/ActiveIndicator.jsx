import { StyledIndicator } from './LinkItem.styles';

function ActiveIndicator() {
  return (
    <StyledIndicator
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
