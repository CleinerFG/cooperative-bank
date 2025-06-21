import Button from '@/components/formElements/Button';
import { useTranslation } from 'react-i18next';

function ConfirmButton() {
  const { t } = useTranslation();
  return <Button type="submit">{t('confirm')}</Button>;
}

export default ConfirmButton;
