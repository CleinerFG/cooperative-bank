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
export const radius = {
  xs: `calc(${spacing.xs} - ${radiusOffset})`,
  sm: `calc(${spacing.sm} - ${radiusOffset})`,
  md: `calc(${spacing.md} - ${radiusOffset})`,
  lg: `calc(${spacing.lg} - ${radiusOffset})`,
  xl: `calc(${spacing.xl} - ${radiusOffset})`,
  '2xl': `calc(${spacing['2xl']} - ${radiusOffset})`,
};

export const icons = {
  xs: rem(20),
  sm: rem(24),
  md: rem(28),
  lg: rem(32),
  xl: rem(36),
  '2xl': rem(40),
};
