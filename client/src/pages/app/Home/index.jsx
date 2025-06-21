import { StyledContainer } from '@/components/layouts/PageLayout/PageLayout.styles';
import Features from './components/Features';
import Balance from './components/Balance';
import MonthlySummary from './components/MonthlySummary';
import InvestmentGoal from './components/InvestmentGoal';

function Home() {
  return (
    <>
      <Balance />
      <StyledContainer as="main">
        <MonthlySummary />
        <InvestmentGoal />
        <Features />
      </StyledContainer>
    </>
  );
}
export default Home;
