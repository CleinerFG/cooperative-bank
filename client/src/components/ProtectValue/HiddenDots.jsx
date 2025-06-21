import { StyledDotsContainer, StyledDot } from './ProtectValue.styles';

function HiddenDots({ fontSize, color, qty }) {
  return (
    <StyledDotsContainer>
      {Array.from({ length: qty }, (_, i) => (
        <StyledDot $fontSize={fontSize} $color={color} key={i} />
      ))}
    </StyledDotsContainer>
  );
}

export default HiddenDots;
