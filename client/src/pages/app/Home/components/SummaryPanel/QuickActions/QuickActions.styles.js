import styled from 'styled-components';
import { sizes } from '@/styles/abstracts';

export const StyledContainer = styled.div`
  display: flex;
  gap: ${sizes.spacing.md};
  justify-content: space-around;
  border-top: solid 1px hsla(0, 0%, 0%, 0.1);
  padding-top: ${sizes.spacing.lg};
`;
