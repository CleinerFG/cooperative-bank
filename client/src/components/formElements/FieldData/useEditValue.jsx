import { useEffect, useState } from 'react';

function useEditValue({ label, initialValue, field, setFocus, setError }) {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (isEditing) {
      setFocus(label);
    }
  }, [isEditing, setFocus, label]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (ev) => {
    if (field.value === initialValue) {
      ev.preventDefault();
      setError(label, { type: 'validate', message: 'upCantBeCurrent' });
      return;
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    field.onChange(initialValue);
  };

  return { isEditing, handleEdit, handleCancel, handleSave };
}

export default useEditValue;
