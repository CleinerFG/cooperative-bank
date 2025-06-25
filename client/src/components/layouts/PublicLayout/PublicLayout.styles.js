import { font, gradients, sizes } from '@/styles/abstracts';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1920px;
  min-height: 100dvh;
  overflow: hidden;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${sizes.spacing.lg};
  ${gradients.bgLinearGradient(300, 60)}
`;

export const StyledBrandLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: ${font.size.md};
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary[600]};
  }
`;

export const StyledMain = styled.main`
  display: flex;
  flex: 1;
`;
