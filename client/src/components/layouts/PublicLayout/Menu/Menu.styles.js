import { sizes } from '@/styles/abstracts';
import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
`;

export const StyledButton = styled.button`
  padding: ${sizes.spacing.xs};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
    border-radius: ${sizes.rounded.sm};
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      background-color: ${theme.colors.gray[200]};
      border-radius: ${sizes.rounded.md};
    `}

  svg {
    width: ${sizes.icon.lg};
    height: ${sizes.icon.lg};
  }
`;
