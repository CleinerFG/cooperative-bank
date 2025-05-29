import { StyledButton } from './Button.styles';

function Button({ variantStyle, Icon, handleClick, children }) {
  return (
    <StyledButton $variant={variantStyle} onClick={handleClick}>
      {Icon && <Icon />}
      {children}
    </StyledButton>
  );
}

export default Button;
