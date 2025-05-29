import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledLabel } from '../baseStyles';
import TagRadio from './TagRadio';
import { StyledRadiosContainer } from './TagRadioGroup.styles';
import { StyledContainer } from '../baseStyles';

function TagRadioGroup({ title, options, defaultSelected, onSelected }) {
  const { t } = useTranslation();

  const [currentSelected, setCurrentSelected] = useState(defaultSelected);

  useEffect(() => {
    onSelected(currentSelected);
  }, [currentSelected, onSelected]);

  return (
    <StyledContainer>
      <StyledLabel>{t(title)}</StyledLabel>
      <StyledRadiosContainer>
        {options.map((op) => (
          <TagRadio
            label={op.label}
            Icon={op.Icon}
            selected={currentSelected === op.value}
            onSelect={() => setCurrentSelected(op.value)}
            key={op.value}
          />
        ))}
      </StyledRadiosContainer>
    </StyledContainer>
  );
}

export default TagRadioGroup;
