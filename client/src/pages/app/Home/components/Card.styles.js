import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.colors.gray[800]};
    width: ${sizes.icon.sm};
    height: ${sizes.icon.sm};
  }
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray[800]};
`;
