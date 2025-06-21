import { createGlobalStyle } from 'styled-components';
import { typography } from './typography';
import { sizes } from '@/styles/abstracts';

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  min-height: 100dvh;
  display: flex;
  justify-content: center;
}

a,
button {
  background-color: transparent;
  border: none;
  text-decoration: none;
  cursor: pointer;
}

li {
  list-style-type: none;
}

svg {
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[900]};
  width: ${sizes.icon.xs};
  height: ${sizes.icon.xs};
}

${typography}
`;

export default GlobalStyle;
