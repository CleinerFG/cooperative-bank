import { css } from 'styled-components';

export const bgLinearGradient = (variant = 300, deg = 90) => css`
  background: linear-gradient(
    ${deg}deg,
    ${({ theme }) => theme.colors.primary[variant]},
    ${({ theme }) => theme.colors.secondary[variant]}
  );
`;
