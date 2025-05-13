import SummaryPanel from './components/SummaryPanel';
import MyCards from './components/MyCards';
import Features from './components/Features';

import styles from './styles.module.scss';

function Home() {
  return (
    <>
      <SummaryPanel />
      <main className={styles.main}>
        <MyCards />
        <Features />
      </main>
    </>
  );
}
export default Home;
