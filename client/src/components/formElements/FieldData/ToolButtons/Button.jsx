import EnterAnimation from '@/components/animations/EnterAnimation';
import { StyledButton } from './ToolButtons.styles';
import { X, Check, Edit3 } from 'lucide-react';

const variantConfig = {
  edit: { Icon: Edit3, type: 'button' },
  confirm: { Icon: Check, type: 'submit' },
  cancel: { Icon: X, type: 'button' },
};

function Button({ variant, onClick }) {
  const { Icon, type } = variantConfig[variant];

  return (
    <EnterAnimation key={variant}>
      <StyledButton $variant={variant} type={type} onClick={onClick}>
        <Icon />
      </StyledButton>
    </EnterAnimation>
  );
}

export default Button;
