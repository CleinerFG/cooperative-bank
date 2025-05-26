import Features from './components/Features';
import { StyledContainer } from '@/components/layouts/PageLayout/PageLayout.styles';
import Balance from './components/Balance';

function Home() {
  return (
    <>
      <Balance />
      <StyledContainer as="main">
        <Features />
      </StyledContainer>
    </>
  );
}
export default Home;
