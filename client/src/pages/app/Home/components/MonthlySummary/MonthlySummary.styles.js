import styled from 'styled-components';
import StyledCard from '@/components/containers/StyledCard';

export const StyledContainer = styled(StyledCard)`
  flex-direction: column;
`;

export const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray[800]};
`;
