import { X } from 'lucide-react';
import { StyledButton } from './Modal.styles';

function CloseButton({ onClose }) {
  return (
    <StyledButton onClick={onClose}>
      <X />
    </StyledButton>
  );
}

export default CloseButton;
