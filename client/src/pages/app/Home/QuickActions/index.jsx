import styles from './styles.module.scss';
import ActionLink from './ActionLink';

const actionsLinks = [
  { label: 'transfer', navigateTo: '/app/transfers', iconName: 'Send' },
  { label: 'pix', navigateTo: '/app/pix', iconName: 'QrCode' },
  { label: 'pay', navigateTo: '/app/pay', iconName: 'Barcode' },
  { label: 'recharge', navigateTo: '/app/recharge', iconName: 'Smartphone' },
];

function QuickActions() {
  return (
    <div className={styles.container}>
      {actionsLinks.map(({ label, navigateTo, iconName }) => (
        <ActionLink
          label={label}
          navigateTo={navigateTo}
          iconName={iconName}
          key={navigateTo}
        />
      ))}
    </div>
  );
}

export default QuickActions;
