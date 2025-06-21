import { StyledButton } from './Button.styles';

function Button({
  variant,
  Icon,
  type = 'button',
  handleClick,
  isDisabled,
  children,
}) {
  return (
    <StyledButton
      $variant={variant}
      disabled={isDisabled}
      type={type}
      onClick={handleClick}
    >
      {Icon && <Icon />}
      {children}
    </StyledButton>
  );
}

export default Button;
