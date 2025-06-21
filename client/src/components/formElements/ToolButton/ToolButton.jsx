import EnterAnimation from '@/components/animations/EnterAnimation';
import { StyledButton } from './ToolButton.styles';

function Button({
  variant = { color: 'gray', size: 'sm' },
  btnType = 'button',
  onClick,
  children,
}) {
  return (
    <EnterAnimation>
      <StyledButton type={btnType} $variant={variant} onClick={onClick}>
        {children}
      </StyledButton>
    </EnterAnimation>
  );
}

export default Button;
