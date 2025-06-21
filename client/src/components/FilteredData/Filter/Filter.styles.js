import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  padding: ${sizes.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.md};
  border-radius: ${sizes.rounded.lg};
  ${sizes.border.sm}
`;

export const StyledHeader = styled.div`
  display: flex;
  gap: ${sizes.spacing.md};
  align-items: center;

  svg {
    stroke-width: 2.2;
    width: ${sizes.icon.sm};
    height: ${sizes.icon.sm};
  }
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray[800]};
`;

export const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${sizes.spacing.sm};
`;

export const StyledButton = styled.button`
  border-radius: ${sizes.rounded.md};
  padding: ${sizes.spacing.sm} ${sizes.spacing.md};
  font-weight: 500;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.secondary[200] : theme.colors.gray[100]};
`;
