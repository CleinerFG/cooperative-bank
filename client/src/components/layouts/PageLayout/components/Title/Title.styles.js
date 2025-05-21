import { font } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: ${font.size['2xl']};
  color: ${({ theme }) => theme.colors.neutral[100]};
  font-weight: ${({ $strong }) => ($strong ? 800 : 600)};
`;
