import { styled } from 'styled-components';

import { variables } from '@/styles/abstracts';

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100dvh;
  max-width: ${variables.appMaxWidth};
  position: relative;
  overflow-x: hidden;
`;

export const StyledPageContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
  background-color: var(--color-neutral-0);
  flex: 1;
`;
