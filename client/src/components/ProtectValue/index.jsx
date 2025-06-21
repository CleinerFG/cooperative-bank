import useProtectValue from '@/hooks/useProtectValue';
import HiddenDots from './HiddenDots';
import { StyledContainer } from './ProtectValue.styles';

function ProtectValue({ fontSize, dotColor, dotQty = 6, children }) {
  const { isHidden } = useProtectValue();

  return (
    <StyledContainer $fontSize={fontSize}>
      {isHidden ? (
        <HiddenDots qty={dotQty} fontSize={fontSize} color={dotColor} />
      ) : (
        children
      )}
    </StyledContainer>
  );
}

export default ProtectValue;
