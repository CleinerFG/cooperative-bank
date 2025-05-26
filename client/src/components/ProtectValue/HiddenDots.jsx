import { StyledContainer, StyledDot } from './ProtectValue.styles';

function HiddenDots({ size, color }) {
  return (
    <StyledContainer>
      {Array.from({ length: 6 }, (_, i) => (
        <StyledDot $size={size} $color={color} key={i} />
      ))}
    </StyledContainer>
  );
}

export default HiddenDots;
