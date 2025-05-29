import Button from '@/components/formElements/Button';
import { StyledElementsContainer, StyledForm } from './Form.styles';
import { useTranslation } from 'react-i18next';

function Form({ buttonText, buttonIcon, handleSubmit, children }) {
  const { t } = useTranslation();

  const onSubmit = (ev) => {
    ev.preventDefault();
    handleSubmit();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledElementsContainer>{children}</StyledElementsContainer>
      <Button Icon={buttonIcon}>{t(buttonText)}</Button>
    </StyledForm>
  );
}

export default Form;
