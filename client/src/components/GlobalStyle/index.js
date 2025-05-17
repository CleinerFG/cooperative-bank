import { createGlobalStyle } from 'styled-components';
import { typography } from './typography';
import { icons } from '@/styles/abstracts/sizes';

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: ${(props) => props.theme.colors.neutral[0]};
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
  color: ${(props) => props.theme.colors.neutral[500]};
  width: ${icons.xs};
  height: ${icons.xs};
}

${typography}
`;

export default GlobalStyle;
