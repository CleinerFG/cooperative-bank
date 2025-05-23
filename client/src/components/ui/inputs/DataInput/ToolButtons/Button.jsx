import EnterAnimation from '@/components/animations/EnterAnimation';
import { StyledButton } from './ToolButtons.styles';
import { X, Check, Edit3 } from 'lucide-react';

const icons = {
  edit: Edit3,
  confirm: Check,
  cancel: X,
};

function Button({ variant, onClick }) {
  const Icon = icons[variant];
  return (
    <EnterAnimation key={variant}>
      <StyledButton $variant={variant} onClick={onClick}>
        <Icon />
      </StyledButton>
    </EnterAnimation>
  );
}

export default Button;
