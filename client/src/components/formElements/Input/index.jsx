import { useTranslation } from 'react-i18next';
import { useController } from 'react-hook-form';
import { StyledContainer, StyledLabel, StyledWrapper } from '../baseStyles';
import InputErros from '../InputErrors';
import MaskedInput from './MaskedInput';

function Input({ control, name, label, maskType }) {
  const { t } = useTranslation();
  const { field, fieldState } = useController({ name, control });


  return (
    <StyledContainer>
      <StyledLabel>{t(label)}</StyledLabel>
      <StyledWrapper>
        <MaskedInput type={maskType} {...field} />
      </StyledWrapper>
      {/* <InputErros errors={[]} /> */}
    </StyledContainer>
  );
}

export default Input;
 