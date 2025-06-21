import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import { useController } from 'react-hook-form';
import { StyledLabel } from '../baseFieldStyles';
import {
  StyledLabelContainer,
  StyledRange,
  StyledContainer,
  StyledValue,
} from './RangeSlider.styles';
import { maskedValue } from './utils';

export default function RangeSlider({
  control,
  name,
  label = 'testLabel',
  min = 0,
  max = 100,
  step = 1,
  maskType,
}) {
  const { field } = useController({
    name,
    control,
  });
  const { t } = useTranslation();
  const id = useId();

  const formattedValue = maskedValue(maskType, field.value);

  return (
    <StyledContainer>
      <StyledLabelContainer>
        <StyledLabel htmlFor={id}>{t(label)}</StyledLabel>
        <StyledValue>{formattedValue}</StyledValue>
      </StyledLabelContainer>

      <StyledRange
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        {...field}
        onChange={(e) => field.onChange(parseFloat(e.target.value))}
      />
    </StyledContainer>
  );
}
