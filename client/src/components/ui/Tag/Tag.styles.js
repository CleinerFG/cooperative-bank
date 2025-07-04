import styled from 'styled-components';
import { sizes } from '@/styles/abstracts';

export const StyledContainer = styled.div`
  display: flex;
  gap: ${sizes.spacing.sm};
  align-items: center;
  padding: ${sizes.spacing.sm};
  border-radius: ${sizes.rounded.md};
  background-color: ${({ theme }) => theme.colors.primary[100]};

  svg {
    stroke: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const StyledLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 600;
`;
