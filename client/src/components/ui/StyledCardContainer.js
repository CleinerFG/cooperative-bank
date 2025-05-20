import styled from 'styled-components';
import { sizes } from '@/styles/abstracts';

export const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.lg};
  padding: ${sizes.spacing.lg};
  background-color: ${({ theme }) => theme.colors.neutral[20]};
  border-radius: ${sizes.rounded.xl};
  box-shadow: ${sizes.shadow.sm};
`;
