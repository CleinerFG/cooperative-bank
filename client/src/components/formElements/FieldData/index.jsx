import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledContainer,
  StyledInput,
  StyledWrapper,
  StyledLabel,
} from '../baseStyles';
import ToolButtons from './ToolButtons';

function FieldData({ label, value, isEditable, onEditValue }) {
  const { t } = useTranslation();

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
      <StyledLabel>{t(label)}</StyledLabel>
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

export default FieldData;
