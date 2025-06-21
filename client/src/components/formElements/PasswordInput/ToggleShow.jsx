import { EyeClosed, Eye } from 'lucide-react';
import {
  StyledToolButtonsContainer,
  ToolButton,
} from '@/components/formElements/ToolButton';

function ToggleShow({ show, onToggle }) {
  return (
    <StyledToolButtonsContainer>
      <ToolButton onClick={onToggle}>
        {show ? <Eye /> : <EyeClosed />}
      </ToolButton>
    </StyledToolButtonsContainer>
  );
}

export default ToggleShow;
