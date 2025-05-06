import AccountBalance from './AccountBalance';
import QuickActions from './QuickActions';

import styles from './styles.module.scss';

function Home() {
  return (
    <>
      <section className={styles.summaryPanel}>
        <AccountBalance />
        <QuickActions />
      </section>
      <main></main>
    </>
  );
}
export default Home;
