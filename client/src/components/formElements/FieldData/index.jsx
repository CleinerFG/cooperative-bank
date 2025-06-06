import { useController, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ToolButtons from './ToolButtons';
import Input from '../Input';
import useEditValue from './useEditValue';

function FieldData({ label, initialValue, validationSchema, isEditable }) {
  const { control, setFocus, setError, handleSubmit } = useForm({
    mode: 'onTouched',
    defaultValues: { [label]: initialValue },
    resolver: yupResolver(validationSchema),
  });

  const { field } = useController({ control, name: label });

  const { isEditing, handleEdit, handleCancel, handleSave } = useEditValue({
    label,
    initialValue,
    field,
    setFocus,
    setError,
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <Input
        control={control}
        name={label}
        label={label}
        isDisabled={!isEditing}
        ToolButtons={
          isEditable && (
            <ToolButtons
              isEditing={isEditing}
              onEdit={handleEdit}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          )
        }
      />
    </form>
  );
}

export default FieldData;
