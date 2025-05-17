import { css } from 'styled-components';
import { spacing } from './sizes';
import { rem } from './utils';

export const row = css`
  display: flex;
  gap: ${spacing.lg};
  padding: ${spacing.lg};
  gap: ${spacing.sm};
  align-items: center;
  border-bottom: solid ${rem(1)} hsla(0, 0%, 0%, 0.1);
`;

export const rowHover = css`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.neutral[20]};
  transition: all 0.5s;
`;
