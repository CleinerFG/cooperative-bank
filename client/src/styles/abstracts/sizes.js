import { css } from 'styled-components';
import { rem } from './utils';

// Paddings, gaps e margin
export const spacing = {
  xs: rem(4),
  sm: rem(8),
  md: rem(12),
  lg: rem(16),
  xl: rem(20),
  '2xl': rem(24),
};

// spacing size - 2px
const radiusOffset = rem(2);
export const rounded = {
  xs: `calc(${spacing.xs} - ${radiusOffset})`,
  sm: `calc(${spacing.sm} - ${radiusOffset})`,
  md: `calc(${spacing.md} - ${radiusOffset})`,
  lg: `calc(${spacing.lg} - ${radiusOffset})`,
  xl: `calc(${spacing.xl} - ${radiusOffset})`,
  '2xl': `calc(${spacing['2xl']} - ${radiusOffset})`,
};

export const icon = {
  xs: rem(20),
  sm: rem(24),
  md: rem(28),
  lg: rem(32),
  xl: rem(36),
  '2xl': rem(40),
};

export const border = {
  sm: css`
    border: solid ${rem(1)} ${({ theme }) => theme.colors.gray[200]};
  `,
  md: css`
    border: solid ${rem(2)} ${({ theme }) => theme.colors.gray[200]};
  `,
};

export const shadow = {
  xs: '0 1px 1px rgba(0, 0, 0, 0.2)',
  sm: '0 2px 2px rgba(0, 0, 0, 0.2)',
  md: '0 4px 6px rgba(0, 0, 0, 0.2)',
  lg: '0 6px 8px rgba(0, 0, 0, 0.2)',
};
