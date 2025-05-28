import { ChartColumnStacked, ShieldCheck, TrendingUp, Dot } from 'lucide-react';
import { StyledContainer, StyledDot } from './Status.styles';
import BaseCard from '@/components/cards/BaseCard';
import Tag from '@/components/ui/Tag';

function StatusItems() {
  return (
    <BaseCard title="Status" iconColored Icon={ChartColumnStacked}>
      <StyledContainer>
        <Tag label="verified" Icon={ShieldCheck} />
        <Tag label="Score" value={910} Icon={TrendingUp} />
        <Tag label="statusActive" Icon={StyledDot} />
      </StyledContainer>
    </BaseCard>
  );
}

export default StatusItems;
