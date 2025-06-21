import styled from 'styled-components';
import { sizes } from '@/styles/abstracts';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.md};
  padding: ${sizes.spacing.lg};
  border-radius: ${sizes.rounded.md};
  background-color: ${({ theme }) => theme.colors.gray[50]};
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const StyledValue = styled.span`
  color: ${({ theme }) => theme.colors.gray[800]};
  font-weight: 600;
`;
