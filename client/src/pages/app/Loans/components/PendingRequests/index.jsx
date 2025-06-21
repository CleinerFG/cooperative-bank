import BaseCard from '@/components/cards/BaseCard';
import NumIndicator from '@/components/ui/NumIndicator';
import { FileClock } from 'lucide-react';
import { StyledContent } from './PendingRequests.styles.js';

function PendingRequests() {
  return (
    <BaseCard title="pendingRequests" Icon={FileClock}>
      <StyledContent>
        <NumIndicator title="submitted" value={4} />
        <NumIndicator title="received" value={5} />
      </StyledContent>
    </BaseCard>
  );
}

export default PendingRequests;
