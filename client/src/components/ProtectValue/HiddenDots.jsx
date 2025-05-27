import { StyledDotsContainer, StyledDot } from './ProtectValue.styles';

function HiddenDots({ fontSize, color }) {
  return (
    <StyledDotsContainer>
      {Array.from({ length: 6 }, (_, i) => (
        <StyledDot $fontSize={fontSize} $color={color} key={i} />
      ))}
    </StyledDotsContainer>
  );
}

export default HiddenDots;
