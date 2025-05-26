import styled from 'styled-components';
import { sizes, variables } from '@/styles/abstracts';

export const StyledNav = styled.nav`
  padding: ${sizes.spacing.md};
  position: fixed;
  z-index: 999;
  bottom: 0;
  width: 100%;
  max-width: ${variables.appMaxWidth};
  background-color: ${({ theme }) => theme.colors.neutral[0]};

  ul {
    display: flex;
    justify-content: space-around;
  }
`;
