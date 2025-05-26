import useProtectValue from '@/hooks/useProtectValue';
import HiddenDots from './HiddenDots';

function ProtectValue({ dotSize, dotColor, children }) {
  const { isHidden } = useProtectValue();
  return isHidden ? <HiddenDots size={dotSize} color={dotColor} /> : children;
}

export default ProtectValue;
