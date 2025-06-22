import { sizes } from '@/styles/abstracts';
import { Trash } from 'lucide-react';
import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  gap: ${sizes.spacing.sm};
  justify-content: space-between;
  align-items: center;
  padding: ${sizes.spacing.md};
  border-radius: ${sizes.rounded.md};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border-left: solid 0.4rem;
  border-left-color: ${({ theme }) => theme.colors.gray[300]};
  color: ${({ theme }) => theme.colors.gray[600]};

  ${({ $isRead, theme }) =>
    !$isRead &&
    css`
      border-left-color: ${theme.colors.secondary[300]};
    `}
`;

export const StyledContent = styled.div`
  span {
    word-wrap: break-word;
  }
`;

export const StyledIconContainer = styled.div`
  svg {
    width: ${sizes.icon.xs};
    height: ${sizes.icon.xs};
    stroke: ${({ theme }) => theme.colors.gray[600]};
    stroke-width: 2.2;
  }
`;
