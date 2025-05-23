import { StyledContainer } from './ToolButtons.styles';
import Button from './Button';

function ToolButtons({ isEditing, onEdit, onSave, onCancel }) {
  return (
    <StyledContainer>
      {isEditing ? (
        <>
          <Button variant="confirm" onClick={onSave} />
          <Button variant="cancel" onClick={onCancel} />
        </>
      ) : (
        <Button variant="edit" onClick={onEdit} />
      )}
    </StyledContainer>
  );
}

export default ToolButtons;
