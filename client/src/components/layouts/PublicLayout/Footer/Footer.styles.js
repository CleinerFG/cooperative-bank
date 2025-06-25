import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledContainer = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  padding: ${sizes.spacing['2xl']};
`;
