import SummaryPanel from './components/SummaryPanel';
import Features from './components/Features';

import styles from './styles.module.scss';

function Home() {
  return (
    <>
      <SummaryPanel />
      <main className={styles.main}>
        <Features />
      </main>
    </>
  );
}
export default Home;
