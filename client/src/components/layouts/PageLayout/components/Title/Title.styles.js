import { font } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: ${font.size.xl};
  color: ${({ theme }) => theme.colors.neutral[100]};
  font-weight: ${({ $strong }) => ($strong ? 'bold' : 500)};
`;
