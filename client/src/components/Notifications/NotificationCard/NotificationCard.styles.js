import { sizes } from '@/styles/abstracts';
import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  padding: ${sizes.spacing.md};
  border-radius: ${sizes.rounded.md};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border-left: solid 0.4rem;
  border-left-color: ${({ theme }) => theme.colors.gray[300]};
  ${({ $isRead, theme }) =>
    !$isRead &&
    css`
      border-left-color: ${theme.colors.secondary[300]};
    `}
`;
