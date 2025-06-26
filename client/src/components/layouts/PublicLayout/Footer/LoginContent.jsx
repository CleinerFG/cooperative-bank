import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function LoginContent() {
  const { t } = useTranslation();
  return <Link to="/register">{t('notPartnerJoinUs')}</Link>;
}

export default LoginContent;
