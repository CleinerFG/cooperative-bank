import { StyledButton } from './Button.styles';

function Button({ variantStyle, handleClick, children }) {
  return (
    <StyledButton $variant={variantStyle} onClick={handleClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
