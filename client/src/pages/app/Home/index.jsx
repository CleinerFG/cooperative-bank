import SummaryPanel from './components/SummaryPanel';
import Features from './components/Features';
import { StyledMain } from './Home.styles';

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
