import AccountBalance from './AccountBalance';
import QuickActions from './QuickActions';
import { StyledContainer } from './SummaryPanel.styles';

function SummaryPanel() {
  return (
    <StyledContainer>
      <section>
        <AccountBalance />
        <QuickActions />
      </section>
    </StyledContainer>
  );
}

export default SummaryPanel;
