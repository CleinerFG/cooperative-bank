import { css } from 'styled-components';
import * as font from '@/styles/abstracts/typography';

export const typography = css`
  html {
    font-size: 100%;
  }

  * {
    font-family: ${font.families.default};
  }

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.colors.neutral[500]};
  }

  p,
  span {
    color: ${(props) => props.theme.colors.neutral[300]};
    font-size: ${font.sizes.md};
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
