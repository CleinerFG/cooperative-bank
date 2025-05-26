import { css } from 'styled-components';
import { font } from '@/styles/abstracts/';

export const typography = css`
  html {
    font-size: 100%;
    font-family: ${font.family.default};
  }

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  h1 {
    font-size: ${font.size['2xl']};
  }

  h2 {
    font-size: ${font.size.xl};
  }

  h3 {
    font-size: ${font.size.lg};
  }

  p,
  span {
    font-size: ${font.size.md};
    color: ${({ theme }) => theme.colors.gray[800]};
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
