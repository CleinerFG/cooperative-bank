import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${sizes.spacing.sm};
  padding: ${sizes.spacing.lg} ${sizes.spacing.sm};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  ${sizes.border.sm}
  border-radius: ${sizes.rounded.lg};
`;

export const StyledItem = styled.div`
  display: flex;
  gap: ${sizes.spacing.sm};
  align-items: center;
  justify-content: center;
  padding: ${sizes.spacing.sm};
  border-radius: ${sizes.rounded.xl};
  background-color: ${({ theme }) => theme.colors.green[100]};

  svg {
    stroke: ${({ theme }) => theme.colors.green[600]};
  }
`;

export const StyledLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-weight: 500;
`;

export const StyledDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.green[600]};
`;

export const StyledMetrics = styled.div``;
