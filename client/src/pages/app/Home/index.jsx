import SummaryPanel from './components/SummaryPanel';
import Features from './components/Features';
import { StyledMain } from '@/components/layouts/PageLayout/PageLayout.styles';

function Home() {
  return (
    <>
      <SummaryPanel />
      <StyledMain>
        <Features />
      </StyledMain>
    </>
  );
}
export default Home;
