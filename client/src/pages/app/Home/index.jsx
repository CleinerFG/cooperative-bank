import Features from './components/Features';
import { StyledContainer } from '@/components/layouts/PageLayout/PageLayout.styles';
import Balance from './components/Balance';
import MonthlySummary from './components/MonthlySummary';

function Home() {
  return (
    <>
      <Balance />
      <StyledContainer as="main">
        <MonthlySummary />
        <Features />
      </StyledContainer>
    </>
  );
}
export default Home;
