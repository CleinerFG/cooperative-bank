import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.xl};
  padding: ${sizes.spacing.md} ${sizes.spacing.xl};
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.xl};
`;
