import { css } from 'styled-components';
import { font } from '@/styles/abstracts/';

export const typography = css`
  html {
    font-size: 100%;
  }

  * {
    font-family: ${font.family.default};
    color: ${({ theme }) => theme.colors.neutral[300]};
  }

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.neutral[500]};
  }

  p,
  span {
    font-size: ${font.size.md};
  }

  @media (min-width: 768px) {
    html {
      font-size: 125%;
    }
  }

  @media (min-width: 1920px) {
    html {
      font-size: 135%;
    }
  }
`;
