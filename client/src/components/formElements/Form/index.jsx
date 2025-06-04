import Button from '@/components/formElements/Button';
import { StyledElementsContainer, StyledForm } from './Form.styles';
import { useTranslation } from 'react-i18next';

function Form({ buttonText, buttonIcon, dataIsValid, onSubmit, children }) {
  const { t } = useTranslation();

  return (
    <StyledForm
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit();
      }}
    >
      <StyledElementsContainer>{children}</StyledElementsContainer>
      <Button isDisabled={!dataIsValid} Icon={buttonIcon}>
        {t(buttonText)}
      </Button>
    </StyledForm>
  );
}

export default Form;
