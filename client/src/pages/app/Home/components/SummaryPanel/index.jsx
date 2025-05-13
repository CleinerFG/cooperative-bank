import AccountBalance from './AccountBalance';
import QuickActions from './QuickActions';

import styles from './styles.module.scss';

function SummaryPanel() {
  return (
    <section className={styles.summaryPanel}>
      <AccountBalance />
      <QuickActions />
    </section>
  );
}

export default SummaryPanel;
