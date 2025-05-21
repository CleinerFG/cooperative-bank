import SummaryPanel from './components/SummaryPanel';
import Features from './components/Features';
import { StyledMain } from '@/components/layouts/PageLayout/PageLayout.styles';

function Home() {
  return (
    <>
      <SummaryPanel />
      <StyledMain $pd>
        <Features />
      </StyledMain>
    </>
  );
}
export default Home;
