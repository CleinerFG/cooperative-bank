import { useId } from 'react';
import {
  StyledCheckbox,
  StyledContainer,
  StyledSlider,
  StyledSliderContainer,
  StyledTextLabel,
} from './Switch.styles';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

function Switch({ control, name, label }) {
  const id = useId();
  const { t } = useTranslation();
  const { field } = useController({ control, name });

  return (
    <StyledContainer>
      <StyledSliderContainer $checked={field.value}>
        <StyledCheckbox
          id={id}
          type="checkbox"
          checked={field.value}
          {...field}
        />
        <StyledSlider $checked={field.value} />
      </StyledSliderContainer>
      <StyledTextLabel htmlFor={id}>{t(label)}</StyledTextLabel>
    </StyledContainer>
  );
}

export default Switch;
