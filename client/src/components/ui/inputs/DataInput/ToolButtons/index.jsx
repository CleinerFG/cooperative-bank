import { Edit3, X, Check } from 'lucide-react';
import {
  StyledBtnGroup,
  StyledButton,
  StyledContainer,
} from './ToolButtons.styles';

// Note: A wrapper is needed on the cancel and confirm buttons, to avoid "ghost focus" due to button toggling in the DOM
// Replacing <StyledBtnGroup/> with a fragment will allow you to observe this effect occurring

function ToolButtons({ isEditing, onEdit, onSave, onCancel }) {
  return (
    <StyledContainer>
      {isEditing ? (
        <StyledBtnGroup>
          <StyledButton $variant="confirm" onClick={onSave}>
            <Check />
          </StyledButton>
          <StyledButton $variant="cancel" onClick={onCancel}>
            <X />
          </StyledButton>
        </StyledBtnGroup>
      ) : (
        <StyledButton $variant="edit" onClick={onEdit}>
          <Edit3 />
        </StyledButton>
      )}
    </StyledContainer>
  );
}

export default ToolButtons;
