import styled from 'styled-components';
import { sizes } from '@/styles/abstracts';

export const StyledContainer = styled.div`
  position: absolute;
  top: 3.3rem;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 8rem;
  border-radius: ${sizes.rounded.md};
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  overflow: hidden;
  ${sizes.border.sm}
`;

export const StyledNav = styled.nav`
  padding: ${sizes.spacing.md};
`;

export const StyledLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.sm};
`;

export const StyledLine = styled.div`
  height: 0.1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[300]};
`;
