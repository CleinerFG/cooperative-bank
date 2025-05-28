import styled from 'styled-components';
import { StyledCardContainer } from '@/components/cards/StyledBaseCard';

export const StyledContainer = styled(StyledCardContainer)`
  flex-direction: column;
`;

export const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

