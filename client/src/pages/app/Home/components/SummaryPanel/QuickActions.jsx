import ActionLink from '../ActionLink';

import styles from './styles.module.scss';
import { Send, QrCode, Barcode, Smartphone } from 'lucide-react';

const actionsLinks = [
  { label: 'transfer', navigateTo: '/app/transfers', Icon: Send },
  { label: 'pix', navigateTo: '/app/pix', Icon: QrCode },
  { label: 'pay', navigateTo: '/app/pay', Icon: Barcode },
  { label: 'recharge', navigateTo: '/app/recharge', Icon: Smartphone },
];

function QuickActions() {
  return (
    <div className={styles.quickActions}>
      {actionsLinks.map(({ label, navigateTo, Icon }) => (
        <ActionLink
          label={label}
          navigateTo={navigateTo}
          Icon={Icon}
          key={navigateTo}
        />
      ))}
    </div>
  );
}

export default QuickActions;
