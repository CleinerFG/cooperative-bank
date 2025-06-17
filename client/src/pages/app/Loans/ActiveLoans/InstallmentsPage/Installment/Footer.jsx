import { useTranslation } from 'react-i18next';
import Button from '@/components/formElements/Button';
import { StyledFooter } from './Installment.styles';

function Footer({ isPaid, isPayable }) {
  const { t } = useTranslation();

  if (isPayable) {
    return (
      <StyledFooter>
        <Button>{isPaid ? t('seeReceipt') : t('pay')}</Button>
      </StyledFooter>
    );
  }

  if (isPaid) {
    return (
      <StyledFooter>
        <Button>{t('seeReceipt')}</Button>
      </StyledFooter>
    );
  }

  return null;
}

export default Footer;
