import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function RegisterContent() {
  const { t } = useTranslation();
  return <Link to="/login">{t('notPartnerJoinUs')}</Link>;
}

export default RegisterContent;
