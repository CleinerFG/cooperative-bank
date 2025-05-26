import SummaryPanel from './components/SummaryPanel';
import Features from './components/Features';
import { StyledContainer } from '@/components/layouts/PageLayout/PageLayout.styles';

function Home() {
  return (
    <>
      <SummaryPanel />
      <StyledContainer as="main">
        <Features />
      </StyledContainer>
    </>
  );
}
export default Home;
