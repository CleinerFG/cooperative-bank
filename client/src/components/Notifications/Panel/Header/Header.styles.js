import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.sm};
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.gray[800]};
`;

export const StyledActionButtons = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: ${sizes.spacing.sm};
  justify-content: flex-end;
`;

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-weight: 600;
  padding: ${sizes.spacing.sm};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border-radius: ${sizes.rounded.md};
  ${sizes.border.md}
`;
