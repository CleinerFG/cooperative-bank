import { useTranslation } from 'react-i18next';
import { useController } from 'react-hook-form';
import { StyledLabel } from '../baseFieldStyles';
import TagRadio from './TagRadio';
import { StyledFieldset, StyledRadiosContainer } from './TagRadioGroup.styles';
import FieldError from '../FieldError';

function TagRadioGroup({ control, name, title, options }) {
  const { t } = useTranslation();
  const { field, fieldState } = useController({ control, name });

  return (
    <StyledFieldset>
      <StyledLabel as="legend">{t(title)}</StyledLabel>
      <StyledRadiosContainer ref={field.ref}>
        {options.map((op) => (
          <TagRadio
            label={op.label}
            Icon={op.Icon}
            selected={field.value === op.value}
            onSelect={() => field.onChange(op.value)}
            key={op.value}
          />
        ))}
      </StyledRadiosContainer>
      <FieldError error={fieldState.error} />
    </StyledFieldset>
  );
}

export default TagRadioGroup;
