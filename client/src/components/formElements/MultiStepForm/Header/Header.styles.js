import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.md};
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.secondary[500]};
`;
