import { useEffect, useRef, useState } from 'react';
import {
  StyledContainer,
  StyledInput,
  StyledWrapper,
  StyledLabel,
} from '../BaseInput.styles';
import ToolButtons from './ToolButtons';

function DataInput({ label, value, isEditable, onEditValue }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onEditValue(tempValue);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempValue(value);
  };

  const handleChange = (ev) => {
    setTempValue(ev.target.value);
  };

  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledWrapper>
        <StyledInput
          value={tempValue}
          ref={inputRef}
          disabled={!isEditing}
          onChange={handleChange}
        />
        {isEditable && (
          <ToolButtons
            isEditing={isEditing}
            onEdit={handleEdit}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}
      </StyledWrapper>
    </StyledContainer>
  );
}

export default DataInput;
