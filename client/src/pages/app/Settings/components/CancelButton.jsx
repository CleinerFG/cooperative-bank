import Button from '@/components/formElements/Button';
import { useTranslation } from 'react-i18next';

function CancelButton({ formReset }) {
  const { t } = useTranslation();
  return (
    // Arrow function prevents RHF's reset() from triggering re-renders or loops on render.
    <Button variant="secondary" handleClick={() => formReset()}>
      {t('cancel')}
    </Button>
  );
}

export default CancelButton;
