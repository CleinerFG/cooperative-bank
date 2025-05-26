import { styled } from 'styled-components';
import { variables } from '@/styles/abstracts';

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100dvh - 5rem;
  max-width: ${variables.appMaxWidth};
  position: relative;
  overflow-x: hidden;
  margin-bottom: 5rem;
`;

export const StyledPageContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
