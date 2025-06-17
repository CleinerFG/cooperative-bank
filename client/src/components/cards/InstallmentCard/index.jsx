import { StyledContainer } from './InstallmentCard.styles';

import Footer from './Footer';
import Header from './Header';
import Content from './Content';

function InstallmentCard({
  value = 500,
  dueDate = new Date(),
  status = 'overdue',
  isPayable = false,
  sequence = 1,
}) {
  return (
    <StyledContainer>
      <Header sequence={sequence} status={status} />
      <Content value={value} dueDate={dueDate} />
      <Footer isPaid={status === 'paid'} isPayable={isPayable} />
    </StyledContainer>
  );
}

export default InstallmentCard;
