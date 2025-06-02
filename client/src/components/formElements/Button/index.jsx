import { StyledButton } from './Button.styles';

function Button({ variant, Icon, handleClick, isDisabled, children }) {
  return (
    <StyledButton
      $variant={variant}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {Icon && <Icon />}
      {children}
    </StyledButton>
  );
}

export default Button;
