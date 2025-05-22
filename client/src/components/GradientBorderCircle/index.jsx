import { StyledContainer, StyledMask } from './GradientBorderCircle.styles';

function GradientBorderCircle({ sizePx, children }) {
  return (
    <StyledContainer $sizePx={sizePx}>
      <StyledMask>{children}</StyledMask>
    </StyledContainer>
  );
}

export default GradientBorderCircle;
