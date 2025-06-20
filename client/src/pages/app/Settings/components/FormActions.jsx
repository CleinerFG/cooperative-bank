import CancelButton from './CancelButton';
import ConfirmButton from './ConfirmButton';
import { StyledFormButtons } from './SettingsComponents.styles';

function FormActions({ formState, formReset }) {
  return (
    formState.isDirty && (
      <StyledFormButtons>
        <CancelButton formReset={formReset} />
        <ConfirmButton />
      </StyledFormButtons>
    )
  );
}

export default FormActions;
