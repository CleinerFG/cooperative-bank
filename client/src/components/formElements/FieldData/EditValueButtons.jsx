import {
  StyledToolButtonsContainer,
  ToolButton,
} from '@/components/formElements/ToolButton';
import { Check, Edit3, X } from 'lucide-react';

function EditValueButtons({ isEditing, onEdit, onSave, onCancel }) {
  return (
    <StyledToolButtonsContainer>
      {isEditing ? (
        <>
          <ToolButton
            key="confirm"
            variant={{ color: 'green', size: 'xs' }}
            onClick={onSave}
          >
            <Check />
          </ToolButton>
          <ToolButton
            key="cancel"
            variant={{ color: 'red', size: 'xs' }}
            onClick={onCancel}
          >
            <X />
          </ToolButton>
        </>
      ) : (
        <ToolButton key="edit" onClick={onEdit}>
          <Edit3 />
        </ToolButton>
      )}
    </StyledToolButtonsContainer>
  );
}

export default EditValueButtons;
