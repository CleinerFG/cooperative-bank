import styled from 'styled-components';
import { sizes } from '@/styles/abstracts';

export const StyledContainer = styled.footer`
  display: flex;
  gap: ${sizes.spacing.md};
  flex-wrap: wrap;
  justify-content: left;
`;

export const StyledType = styled.div`
  display: flex;
  gap: ${sizes.spacing.sm};
  align-items: center;
  padding: ${sizes.spacing.sm};
  border-radius: ${sizes.rounded.md};
  background-color: ${({ theme }) => theme.colors.primary[100]};

  svg {
    stroke: ${({ theme }) => theme.colors.gray[600]};
  }
`;

export const StyledTypeLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-weight: 600;
`;
